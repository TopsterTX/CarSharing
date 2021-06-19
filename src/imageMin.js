import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const files = await imagemin(['./src/images/*.{jpg,png}'], {
	destination: './build/images',
	plugins: [
		imageminJpegtran({
            quality: [0.6, 0.8]
        }),
		imageminPngquant({
			quality: [0.6, 0.8]
		})
	]
});
console.log(files);