import * as THREE from 'three'
import TWEEN from "three/examples/jsm/libs/tween.module";
import { ShallowRef, shallowRef } from 'vue';

export function headerThree(canvas: HTMLCanvasElement): void {
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight

    const scene = new THREE.Scene()

    const camera = new THREE.OrthographicCamera(-6, 6, 6, -6, 0.1, 100);
    camera.position.set(1, 6.5, 1);

    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(w, h)

    function initLight() {
        const ambientLight = new THREE.AmbientLight("#FFFFFF", 1);
        const pointLight = new THREE.PointLight("#FFFFFF", 25, 15, 1.5);
        pointLight.position.set(-1, 5, 0);

        scene.add(ambientLight);
        scene.add(pointLight);
    }

    const pointLight = new THREE.PointLight('#ebebeb', 10, 0, 0.0)
    scene.add(pointLight)

    const raycastMeshes: THREE.Mesh[] = []
    const originalPositions: { x: number, y: number, z: number }[] = []

    const group = new THREE.Group()

    function initMeshes() {
        const cubeGeometry = new THREE.BoxGeometry(5, 7, 1);
        const cubeMaterial1 = new THREE.MeshPhongMaterial({
            color: "#282828",
        });
        const cubeMaterial2 = new THREE.MeshPhongMaterial({
            color: "#282828",
        });
        const cubeMaterial3 = new THREE.MeshPhongMaterial({
            color: "#282828",
        });

        const mesh1 = new THREE.Mesh(cubeGeometry, cubeMaterial1);
        const mesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial2);
        const mesh3 = new THREE.Mesh(cubeGeometry, cubeMaterial3);

        mesh1.position.set(0, -2, 0)
        mesh2.position.set(0, -2, 2)
        mesh3.position.set(0, -2, -2)
        mesh3.rotateY((Math.PI * 15) / 180);

        group.add(mesh1, mesh2, mesh3)
        scene.add(group);
        raycastMeshes.push(mesh1, mesh2, mesh3)
        originalPositions.push(mesh1.position.clone(), mesh2.position.clone(), mesh3.position.clone())

        camera.lookAt(mesh1.position)
    }
    function initPlane() {
        const planeGeo = new THREE.PlaneGeometry(50, 50);
        const planeMat = new THREE.MeshBasicMaterial({
            color: 0xebebeb,
            side: THREE.DoubleSide,
        });

        const plane = new THREE.Mesh(planeGeo, planeMat);
        plane.rotateX((Math.PI * 90) / 180);
        plane.position.y = -4.5;
        scene.add(plane);

        return plane
    }

    function tick() {
        TWEEN.update();
        renderer.render(scene, camera)
        requestAnimationFrame(tick)
    }

    initLight()
    initMeshes()
    initPlane()
    scene.fog = new THREE.Fog(0xebebeb, 7, 11);

    tick()

    // Raycaster

    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const wasHoveredObjects: THREE.Mesh[] = []
    const hoveredObject: ShallowRef<THREE.Mesh | null> = shallowRef(null)

    function onMouseMove(event) {
        const rect = renderer.domElement.getBoundingClientRect();

        pointer.x = ((event.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1;
        pointer.y = - ((event.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;

        pointLight.position.set(pointer.x * 4 - pointer.y * 4, 0, -pointer.x * 4 - pointer.y * 4)
        group.rotation.y = ((Math.PI * (pointer.x * 2 - pointer.y * 2)) / 180)
        group.position.set(pointer.x / 10 + pointer.y / 10, 0, -pointer.x / 10 + pointer.y / 10)

        raycaster.setFromCamera(pointer, camera);

        const intersects = raycaster.intersectObjects(raycastMeshes, false);

        raycastMeshes.forEach((o, i) => {
            if (wasHoveredObjects.includes(o)) {
                wasHoveredObjects.splice(wasHoveredObjects.indexOf(o), 1)

                new TWEEN.Tween(o.position)
                    .to(
                        {
                            x: originalPositions[i].x,
                            y: originalPositions[i].y,
                            z: originalPositions[i].z
                        },
                        450
                    )
                    .easing(TWEEN.Easing.Elastic.Out)
                    .dynamic(true)
                    .start()


                new TWEEN.Tween(o.material.color)
                    .to(
                        {
                            r: 0.021,
                            g: 0.021,
                            b: 0.021
                        },
                        350
                    )
                    .dynamic(true)
                    .start()
            }
        })

        if (intersects.length) {
            const obj = intersects[0].object

            if (hoveredObject.value !== obj)
                if (hoveredObject.value !== null) {
                    wasHoveredObjects.push(hoveredObject.value)
                }
            hoveredObject.value = obj

            new TWEEN.Tween(obj.position)
                .to(
                    {
                        x: originalPositions[raycastMeshes.indexOf(obj)].x,
                        y: originalPositions[raycastMeshes.indexOf(obj)].y + 1,
                        z: originalPositions[raycastMeshes.indexOf(obj)].z
                    },
                    450
                )
                .easing(TWEEN.Easing.Elastic.Out)

                .dynamic(true)
                .start()

            new TWEEN.Tween(obj.material.color)
                .to(
                    {
                        r: 1,
                        g: 0,
                        b: 0
                    },
                    350
                )
                .dynamic(true)
                .start()
        }
        else {
            // no intersects so nothing should be coloured as if hovered
            if (hoveredObject.value !== null) {
                wasHoveredObjects.push(hoveredObject.value)
                hoveredObject.value = null
            }
        }
    }

    window.addEventListener("mousemove", onMouseMove);

    window.addEventListener('resize', () => {
        canvas.style.width = '100%'
        canvas.style.height = '100%'

        const w = canvas.offsetWidth
        const h = canvas.offsetHeight

        camera.aspect = w / h
        camera.updateProjectionMatrix()

        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(w, h)
        renderer.render(scene, camera)
    })

}