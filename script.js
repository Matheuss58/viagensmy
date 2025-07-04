document.addEventListener('DOMContentLoaded', function() {
    const destinations = [
        {
            name: "Praça Zumbi dos Palmares",
            location: "Curitiba, PR",
            image: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Um espaço público dedicado à cultura afro-brasileira, com eventos culturais e área de lazer.",
            benefits: [
                "Espaço aberto e gratuito",
                "Eventos culturais frequentes",
                "Ótimo para passeios em família",
                "Localização central em Curitiba"
            ]
        },
        {
            name: "Shopping Ventura",
            location: "Curitiba, PR",
            image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Um dos shoppings mais modernos de Curitiba, com diversas opções de compras e lazer.",
            benefits: [
                "Ampla variedade de lojas",
                "Praça de alimentação completa",
                "Cinema de última geração",
                "Estacionamento amplo"
            ]
        },
        {
            name: "Shopping Palladium",
            location: "Curitiba, PR",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Um dos maiores e mais completos centros de compras e entretenimento da cidade, oferecendo uma experiência única aos seus visitantes.",
            benefits: [
                "Mais de 500 lojas",
                "Diversas opções de entretenimento",
                "Arquitetura impressionante",
                "Localização privilegiada"
            ]
        },
        {
            name: "Cinema (Shopping Palladium)",
            location: "Curitiba, PR",
            image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Complexo de cinemas com tecnologia de ponta e conforto premium para os espectadores.",
            benefits: [
                "Telas IMAX e 3D",
                "Poltronas reclináveis",
                "Programação diversificada",
                "Promoções para estudantes"
            ]
        },
        {
            name: "Casa de um amigo",
            location: "Vários locais",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
            description: "Nada como reunir os amigos para momentos descontraídos e memoráveis.",
            benefits: [
                "Ambiente descontraído e familiar",
                "Custo baixo ou zero",
                "Liberdade para criar sua própria programação",
                "Ótimo para fortalecer amizades"
            ]
        },
        {
            name: "Quadra de futebol",
            location: "Curitiba, PR",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80",
            description: "Para os amantes de esporte, uma boa pelada com os amigos é sempre uma ótima opção.",
            benefits: [
                "Atividade física saudável",
                "Diversão garantida",
                "Pode ser gratuito ou de baixo custo",
                "Ótimo para socializar"
            ]
        }
    ];

    const destinationsContainer = document.getElementById('destinations');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    // Função para renderizar os destinos
    function renderDestinations(destinationsToRender) {
        destinationsContainer.innerHTML = '';
        
        destinationsToRender.forEach(destination => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            
            card.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}" class="destination-image">
                <div class="destination-info">
                    <h2>${destination.name}</h2>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${destination.location}</span>
                    </div>
                    <p>${destination.description}</p>
                    <div class="benefits">
                        <h3>Benefícios</h3>
                        <ul>
                            ${destination.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            
            destinationsContainer.appendChild(card);
        });
    }

    // Função para filtrar destinos
    function filterDestinations() {
        const searchTerm = searchInput.value.toLowerCase();
        const filtered = destinations.filter(dest => 
            dest.name.toLowerCase().includes(searchTerm) || 
            dest.location.toLowerCase().includes(searchTerm) ||
            dest.description.toLowerCase().includes(searchTerm) ||
            dest.benefits.some(b => b.toLowerCase().includes(searchTerm))
        );
        
        renderDestinations(filtered);
    }

    // Event listeners
    searchBtn.addEventListener('click', filterDestinations);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterDestinations();
        }
    });

    // Renderização inicial
    renderDestinations(destinations);
});