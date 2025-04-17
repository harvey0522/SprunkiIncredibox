// 推荐游戏数据
const recommendedGames = [
    {
        href: "../incredibox-mustard/",
        imgSrc: "../img/incredibox-mustard.png",
        alt: "Incredibox Mustard",
        title: "Incredibox Mustard",
        description: "Create mustard beats!"
    },
    {
        href: "../",
        imgSrc: "../img/sprunki.png",
        alt: "Sprunki Incredibox",
        title: "Sprunki Incredibox",
        description: "Create spunky beats!"
    },
    {
        href: "../remastered/",
        imgSrc: "../img/remastered.webp",
        alt: "Sprunki Remastered",
        title: "Sprunki Remastered",
        description: "Experience the remastered Friday Night Funkin'!"
    },
    {
        href: "../sprunki-oc/",
        imgSrc: "../img/sprunki-oc.png",
        alt: "Sprunki OC",
        title: "Sprunki OC",
        description: "Original characters!"
    },
    {
        href: "../dandys-world/",
        imgSrc: "../img/dandys-world.png",
        alt: "Sprunki Dandy's World",
        title: "Dandy's World",
        description: "Creepy yet captivating!"
    },
    {
        href: "../neesterversal-v3-incredibox/",
        imgSrc: "../img/neesterversal.png",
        alt: "Neesterversal v3 Incredibox",
        title: "Neesterversal v3",
        description: "20 Unique Neesters!"
    },
    {
        href: "../fnf/",
        imgSrc: "../img/sprunki-fnf.jpg",
        alt: "Sprunki fnf",
        title: "Sprunki FNF",
        description: "Friday Night Funkin'!"
    },

    {
        href: "../gray-sprunki/",
        imgSrc: "../img/gray-sprunki.png",
        alt: "Gray Sprunki Incredibox",
        title: "Gray Sprunki",
        description: "Cool Cat of Incredibox"
    },

];


// 添加一个标志来追踪是否已经渲染
let hasRendered = false;

// 修改渲染推荐游戏函数
function renderRecommendedGames() {
    // 如果已经渲染过，直接返回
    if (hasRendered) {
        return;
    }

    const container = document.getElementById('recommended-games-container');
    if (!container) {
        console.error('Recommended games container not found');
        return;
    }

    let html = '';
    recommendedGames.forEach(game => {
        html += `
            <a href="" class="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <img src="${game.imgSrc}" alt="${game.alt}" class="w-full h-24 object-cover">
                <div class="p-2">
                    <h3 class="text-sm font-semibold mb-1 text-red-700">${game.title}</h3>
                    <p class="text-xs text-gray-600">${game.description}</p>
                </div>
            </a>
        `;
    });

    container.insertAdjacentHTML('beforeend', html);
    
    // 设置渲染标志为true
    hasRendered = true;
}
// When the DOM is loaded, execute the rendering
document.addEventListener('DOMContentLoaded', renderRecommendedGames);

// xuan rang header

// ... 现有的recommendedGames数组代码 ...

// 头部HTML模板
const headerHTML = `
<header class="bg-gradient-to-r from-red-800 to-red-900 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
    <div class="container mx-auto px-4">
        <nav class="flex justify-between items-center">
            <div class="logo">
                <a href="../" class="flex items-center text-xl font-bold">
                    <i class="fas fa-music mr-2 hidden sm:block"></i> Sprunki Incredibox</a>
            </div>
            <ul class="nav-links hidden md:flex space-x-6">
                <li><a href="../play/" class="hover:text-yellow-400 transition duration-300">
                    <i class="fas fa-play mr-1"></i> Play Sprunki</a></li>
                <li><a href="../mod/" class="hover:text-yellow-400 transition duration-300">
                    <i class="fas fa-play mr-2"></i> Mod</a></li>
                <li><a href="../download/" class="hover:text-yellow-400 transition duration-300">
                    <i class="fas fa-download mr-1"></i> Download</a></li>
                <li><a href="../sprunki-characters/" class="hover:text-yellow-400 transition duration-300" title="Sprunki Characters">
                    <i class="fas fa-users mr-1"></i> Characters</a></li>
                <li><a href="../sprunki-phase/" class="hover:text-yellow-400 transition duration-300" title="Sprunki Phase">
                    <i class="fas fa-music mr-1"></i> Phase</a></li>
            </ul>
            <div class="burger md:hidden cursor-pointer">
                <div class="line1 bg-white h-0.5 w-6 my-1 transition duration-300"></div>
                <div class="line2 bg-white h-0.5 w-6 my-1 transition duration-300"></div>
                <div class="line3 bg-white h-0.5 w-6 my-1 transition duration-300"></div>
            </div>
        </nav>
    </div>
</header>

<div class="mobile-nav fixed top-0 left-0 w-full h-screen bg-red-900 z-40 transform -translate-x-full transition duration-300 ease-in-out">
    <ul class="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
        <li><a href="../play/" class="hover:text-yellow-400 transition duration-300">
            <i class="fas fa-play mr-2"></i> Play Sprunki</a></li>
        <li><a href="../download/" class="hover:text-yellow-400 transition duration-300">
            <i class="fas fa-download mr-2"></i> Download</a></li>
        <li><a href="../sprunki-characters/" class="hover:text-yellow-400 transition duration-300">
            <i class="fas fa-users mr-2"></i> Characters</a></li>
        <li><a href="../sprunki-phase/" class="hover:text-yellow-400 transition duration-300">
            <i class="fas fa-music mr-2"></i> Phase</a></li>
    </ul>
</div>`;

// 渲染头部
function renderHeader() {
    const headerContainer = document.querySelector('header');
    if (!headerContainer) {
        console.error('头部容器未找到');
        return;
    }
    headerContainer.innerHTML = headerHTML;

    // 初始化移动端菜单
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('-translate-x-full');
        body.classList.toggle('overflow-hidden');
        burger.classList.toggle('active');
        
        burger.children[0].classList.toggle('rotate-45');
        burger.children[0].classList.toggle('translate-y-1.5');
        burger.children[1].classList.toggle('opacity-0');
        burger.children[2].classList.toggle('-rotate-45');
        burger.children[2].classList.toggle('-translate-y-1.5');
    });
}

// ... 其他代码保持不变 ...

export { renderRecommendedGames, renderHeader };








// Export the function for use elsewhere
// export { renderRecommendedGames };