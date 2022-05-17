import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TablaModel from "./src/models/tabla3d.gltf"

const modelFuncional= () =>{

        const scene = new THREE.Scene()

        const canvas = document.querySelector(".modelWebGl")


        /*------- config ------- */


            /* sizes */

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener("resize", () =>{
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })


            /* render */

        const renderer =new THREE.WebGLRenderer({
            canvas: canvas, 
            antialias:true,
            alpha:true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.physicallyCorrectLights = true




        /* ------------------------------------------------- */

        

            /* lights */
       
            const ambientLight = new THREE.AmbientLight(0xFFDAAA, 8)
            scene.add(ambientLight)
        
            const pointLight = new THREE.PointLight(0xFFDAAA,5)
            pointLight.position.set(0 , 0, 2)
            scene.add(pointLight)

            const pointLight2 = new THREE.PointLight(0xFFDAAA, 5)
            pointLight2.position.set(2 , 1, 0)
            scene.add(pointLight2)

            const pointLight3 = new THREE.PointLight(0xFFDAAA, 5)
            pointLight3.position.set(-2 , -1, 0)
            scene.add(pointLight3)

            const directionalLight = new THREE.DirectionalLight(0xFFDAAA, 10)
            scene.add(directionalLight)
            directionalLight.position.set(1, -0.25, -30)

            /* camera */
            
        const camera =new THREE.PerspectiveCamera(57, sizes.width / sizes.height, .1, 100)
            camera.position.z= 4.6
        scene.add(camera)


        let tablaMesh


        const gltfLoader = new GLTFLoader()
        gltfLoader.load(TablaModel,
            (gltf) =>
            {
                tablaMesh= gltf.scene
                tablaMesh.scale.set(.7,.7, .7)
                tablaMesh.position.set(0,-1.6, 0)
                scene.add(tablaMesh)
            }
        )

            // Controls

        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true
       /*  controls.enableZoom = false  */
        controls.enablePan= false
        controls.minDistance = .9
        controls.maxDistance = 6

        controls.minPolarAngle = 1;
        controls.maxPolarAngle = 2;

            
            /* animate  */

        
        const clock = new THREE.Clock()
        const animate = ()=>{
            const time = clock.getElapsedTime()
            const ghost1Angle = time 


            if (tablaMesh){
                tablaMesh.rotation.y += 0.009
                /* tablaMesh.position.y = Math.cos(ghost1Angle) / 6  */
                pointLight2.rotation.y -=  0.8
                pointLight.rotation.y -=  0.8
                pointLight3.rotation.y -=  0.8
                ambientLight.rotation.y -=  0.8
            } 

            controls.update() 
            renderer.render(scene,camera)
            window.requestAnimationFrame(animate)

        }
        animate()



        /* OPTIMIZACION */
        
        gltfLoader.verticesNeedUpdate = true; 
        gltfLoader.elementsNeedUpdate = true; 
        gltfLoader.morphTargetsNeedUpdate = true; 
        gltfLoader.uvsNeedUpdate = true;
        gltfLoader.normalsNeedUpdate = true; 
        gltfLoader.colorsNeedUpdate = true; 

        gltfLoader.needsUpdate = true

    }



export default modelFuncional;