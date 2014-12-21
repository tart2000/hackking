var _scene, _camera, _renderer;
var _model;

/*************/
var init = function() {
  _scene = new THREE.Scene();
  _camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000);
  _camera.position.set(-10, -10, -50);
  _camera.lookAt(new THREE.Vector3(0.0, 0.0, 0.0));
  _scene.add(_camera);
  
  _renderer = new THREE.WebGLRenderer();
  _renderer.setSize(512, 512);
  _renderer.setClearColor(0xaaaaaa, 0xff);
  var canvas = document.getElementById("3dcanvas");
  canvas.appendChild(_renderer.domElement);

  var manager = new THREE.LoadingManager();
  manager.onProgress = function(item, loaded, total) {
    console.log(item, loaded, total);
  };
  var jsLoader = new THREE.OBJLoader(manager);
  jsLoader.load('assets/models/angle.obj', function(object) {
    _model = object
    _scene.add(_model);
    console.log("LOAD DONE");
  });

  var ambientLight = new THREE.AmbientLight(0xffffff);
  _scene.add(ambientLight);
}

/*************/
var render = function(timestamp) {
  requestAnimationFrame(render);

  _renderer.clear();
  _renderer.render(_scene, _camera);
}

init();
console.log("RUN");
render();
