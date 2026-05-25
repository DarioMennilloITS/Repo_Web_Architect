document.addEventListener('DOMContentLoaded', function () {
    console.log('Kraftwerk members loaded!');

    const members = {
        ralf: {
            name: 'Ralf Hütter',
            role: 'Keyboards / Vocals / Founding Member',
            image: './img/ralf-hutter.jpg',
            bio: 'Ralf Hütter is the sole remaining founding member and the driving force behind Kraftwerk. Born in 1946 in Krefeld, Germany, he studied at the Academy of Arts in Remscheid and Düsseldorf. Hütter is responsible for the band\'s conceptual vision, blending minimalism, electronic textures, and robotic themes. He famously described Kraftwerk\'s sound as "Industrielle Volksmusik" — industrial folk music. His obsession with cycling even inspired the 1983 album <em>Tour de France</em>.',
            years: 'Member since 1968 — present'
        },
        florian: {
            name: 'Florian Schneider',
            role: 'Flutes / Synthesizers / Founding Member',
            image: './img/florian-schneider.jpg',
            bio: 'Florian Schneider-Esleben co-founded Kraftwerk with Ralf Hütter in 1968. Born in 1947 in Öhningen, Germany, he came from an artistic family and initially played the flute. Schneider was instrumental in shaping the band\'s early experimental sound and its transition to pure electronics. He developed a fascination with synthesized speech and robotic vocals, contributing to the identity of albums like <em>The Man-Machine</em>. He left the band in 2008 and passed away in 2020, leaving a monumental legacy.',
            years: '1968 — 2008'
        },
        wolfgang: {
            name: 'Wolfgang Flür',
            role: 'Electronic Percussion',
            image: './img/wolfgang-flur.jpg',
            bio: 'Wolfgang Flür joined Kraftwerk in 1973 and became one of the most recognizable figures of the classic lineup. Born in 1947 in Frankfurt, he initially built his own electronic drum kits before joining the band. Flür\'s precise, mechanical percussion defined the rhythm of landmark albums such as <em>Autobahn</em>, <em>Radio-Activity</em>, <em>Trans-Europe Express</em>, and <em>The Man-Machine</em>. He left the group in 1987 and later pursued a solo career and writing.',
            years: '1973 — 1987'
        },
        karl: {
            name: 'Karl Bartos',
            role: 'Electronic Percussion / Synthesizers',
            image: './img/karl-barthos.png',
            bio: 'Karl Bartos became a core member of Kraftwerk in 1975, bringing formal musical training from the Robert Schumann Hochschule in Düsseldorf. Born in 1952 in Berchtesgaden, he contributed to the writing and production of the band\'s most celebrated albums, including <em>Trans-Europe Express</em>, <em>The Man-Machine</em>, and <em>Computer World</em>. Bartos left in 1990 and later released acclaimed solo work under his own name and as Elektric Music.',
            years: '1975 — 1990'
        }
    };

    const modal = document.getElementById('bioModal');
    const backdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('modalClose');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const modalBio = document.getElementById('modalBio');
    const modalYears = document.getElementById('modalYears');

    function openModal(memberKey) {
        const m = members[memberKey];
        if (!m) return;

        modalImage.src = m.image;
        modalImage.alt = m.name;
        modalName.textContent = m.name;
        modalRole.textContent = m.role;
        modalBio.innerHTML = m.bio;
        modalYears.textContent = m.years;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.member-card').forEach(function (card) {
        card.addEventListener('click', function () {
            const key = card.getAttribute('data-member');
            openModal(key);
        });
    });

    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
