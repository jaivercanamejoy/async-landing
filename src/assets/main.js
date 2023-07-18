const API = 'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UCdI8evszfZvyAl2UVCypkTA';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01b0a7ea82mshb9e6bdca6d6d43cp1c1f4ajsn89f365ba09c7',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
}

(async () => {
    try {
        const videos = await fetch(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.thumbnail.items.url}" alt="${video.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.tittle}
          </h3>
        </div>
      </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();