window.addEventListener('scroll', ()=> {
const header = document.querySelector('header')
if(window.scrollY > 70)
{
    header.style.opacity = '1';
    header.style.visibility = 'visible';
}
else
{
    header.style.opacity = '0';
    header.style.visibility = 'hidden';	
}});

window.addEventListener('scroll', ()=> {
	const explore = document.querySelector('#explore');
	if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
        explore.classList.add('final_explore');
    }
	else
	{
		explore.classList.remove('final_explore');
	}
});




/* Loader Function */
document.body.style.overflow = 'hidden';

window.onload = function() {
    var loader = document.getElementById('loader');
    var paths = document.querySelectorAll('.loader-path');

    // Calcola lunghezza esatta di ogni path
    paths.forEach(function(path) {
        var length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    });

    // Disegna
    setTimeout(function() {
        paths.forEach(function(path, i) {
            path.style.transition = 'stroke-dashoffset ' + (1.4 + i * 0.2) + 's cubic-bezier(0.4, 0, 0.2, 1)';
            path.style.strokeDashoffset = '0';
        });

        // Cancella
        setTimeout(function() {
            paths.forEach(function(path, i) {
                var length = path.getTotalLength();
                path.style.transition = 'stroke-dashoffset ' + (1.2 + i * 0.15) + 's cubic-bezier(0.4, 0, 0.2, 1)';
                path.style.strokeDashoffset = length;
            });

            // Fade out loader
            setTimeout(function() {
                loader.style.transition = 'opacity 0.8s ease';
                loader.style.opacity = '0';
                document.body.style.overflow = '';
                setTimeout(function() { loader.style.display = 'none'; }, 800);
            }, 1400);
        }, 2000);
    }, 400);
};
