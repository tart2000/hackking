var _scene, _camera, _renderer;
var _model;

/*************/
var init = function() {
  _scene = new THREE.Scene();
  _camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  _camera.position.set(0, 0, 10);
  _camera.lookAt(new THREE.Vector3(0.0, 0.0, 0.0));
  _scene.add(_camera);
  
  _renderer = new THREE.WebGLRenderer();
  _renderer.setSize(512, 512);
  _renderer.setClearColor(0xaaaaaa, 0xff);
  var canvas = document.getElementById("3dcanvas");
  canvas.appendChild(_renderer.domElement);

  var jsLoader = new THREE.JSONLoader(true);
  jsLoader.load('assets/models/angle.json', function(geometry, material) {
    _model = new THREE.Mesh(geometry, material);
    _scene.add(_model);
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
render();
