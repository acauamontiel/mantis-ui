console.time('Initialize');
import App from './app/index';
// Modules
import batchInstantiate from './modules/batch-instantiate';
// Components
import Navbar from './components/navbar';

const app = new App();

app.init(function () {
	console.log('%cMantis Starter', 'color: #338656; font: 50px sans-serif;');
	console.debug(this);

	batchInstantiate('.navbar', Navbar);

	console.timeEnd('Initialize');
});
