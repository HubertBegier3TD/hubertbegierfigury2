function glowna() {
    let sze = parseInt(document.getElementById('sze').value, 10);
    let wys = parseInt(document.getElementById('wys').value, 10);
    let ko = document.getElementById('ko').value;
    if (isNaN(sze) || sze <= 0) {
        sze = siedem(1000);
    }
    if (isNaN(wys) || wys <= 0) {
        wys = siedem(1000);
    }
    if (!/^#[0-9A-F]{6}$/i.test(ko)) {
        ko = `#${siedem(0xFFFFFF).toString(16).padStart(6, '0')}`;
    }
    const k = document.getElementById('k').checked;
    const kw = document.getElementById('kw').checked;
    const p = document.getElementById('p').checked;

    
    const s = document.getElementById('s');
    s.innerHTML = '';

   
    if (k) {
        const k1 = document.createElement('div');
        k1.className = 'k2';
        k1.style.padding = '10px';
        k1.style.width = `${sze}px`;
        k1.style.height = `${wys}px`;
        k1.style.backgroundColor = ko;
        k1.style.borderRadius = '50%'; 
        s.appendChild(k1);
    }
    if (kw) {
        const kw1 = document.createElement('div');
        kw1.className = 'kw2';
        kw1.style.width = `${wys}px`;
        kw1.style.height = `${wys}px`;
        kw1.style.padding = '10px';
        kw1.style.backgroundColor = ko;
        s.appendChild(kw1);
    }
    if (p) {
        const p1 = document.createElement('div');
        p1.className = 'p2';
        p1.style.width = `${sze}px`;
        p1.style.padding = '10px';
        p1.style.height = `${wys}px`;
        p1.style.backgroundColor = ko;
        s.appendChild(p1);
    }
}
    function czysc() {
        s.innerHTML = '';
    }