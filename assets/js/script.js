const lists = [
    {
        heading: 'arch',
        links: [
            {
                title: 'home',
                url: 'https://archlinux.org/',
            },
            {
                title: 'wiki',
                url: 'https://wiki.archlinux.org/',
            },
            {
                title: 'aur',
                url: 'https://aur.archlinux.org/',
            },
        ],
    },
    {
        heading: 'work',
        links: [
            {
                title: 'gmail',
                url: 'https://www.gmail.com/',
            },
            {
                title: 'github',
                url: 'https://www.github.com/',
            },
        ],
    },
   
    {
        heading: 'media',
        links: [
            {
                title: 'youtube',
                url: 'https://www.youtube.com/',
            },
            {
                title: 'hulu',
                url: 'https://hulu.com',
            },
            {
                title: 'netflix',
                url: 'https://netflix.com/',
            },
            {
                title: 'hbo',
                url: 'https://play.hbomax.com/',
            },

        ],
    },
    {
        heading: 'social',
        links: [
            {
                title: 'reddit',
                url: 'https://www.reddit.com/',
            },
            {
                title: 'twitter',
                url: 'https://twitter.com/home',
            },
            {
                title: '/g/',
                url: 'https://boards.4chan.org/g/',
            },
            {
                title: '/wg/',
                url: 'https://boards.4chan.org/wg/',
            },
        ],
    },
]

function renderLists() {
    const linksWrapper = document.querySelector('#links')

    lists.forEach(list => {
        const linksTemplate = list.links.map(link => {
            return `
				<li class="links__item">
					<a class="links__link" href="${link.url}">${link.title}</a>
				</li>
			`
        })

        const template = `
			<ul class="links">
				<li class="links__item">
					<span class="links__heading">${list.heading}</span>
				</li>
				${linksTemplate.join('')}
			</ul>
		`

        linksWrapper.insertAdjacentHTML('beforeend', template)
    })
}

renderLists()
