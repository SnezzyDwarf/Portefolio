
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(links => {
  links.addEventListener('mouseover', () => {
    links.style.fontSize = '2.3rem';
    links.style.backgroundColor = '#FFFFFF';
    links.style.color = '#2A2A2A';
    links.style.borderRadius = '8px'
    links.style.padding = '15px'
    links.style.fontWeight = 'bolder'
    links.style.transition = ' 0.5s ease'
  });
  links.addEventListener('mouseout', () => {
    links.style.fontSize = '2.2rem';
    links.style.backgroundColor = '#2A2A2A';
    links.style.color = '#FFFFFF';
    links.style.fontWeight = 'normal'
    links.style.padding = '0px'
    links.style.transition = ' 0.5s ease'
  });
});

const techImg1 = document.querySelectorAll('.img1');

const techImg2 = document.querySelectorAll('.img2');

const techImg3 = document.querySelectorAll('.img3');

const techImg4 = document.querySelectorAll('.img4');

const techImg5 = document.querySelectorAll('.img5');

// for footer images js

const footerImg1 = document.querySelectorAll('.img6');
const footerImg2 = document.querySelectorAll('.img7');
const footerImg3 = document.querySelectorAll('.img8');


function changeImage(imgElement, newSrc) {
  imgElement.src = newSrc;
}

techImg1.forEach(img => {
  const orignalSrc = img.src;

  img.addEventListener('mouseover', () => {
    changeImage(img, 'assets/images/html5-original.svg')
    img.style.width = '110px';
    img.style.transition = '0.5s ease';

  })
  img.addEventListener('mouseout', () => {
    img.src = orignalSrc;
    img.style.width = '100px'
  })
});

techImg2.forEach(img => {
  const orignalSrc = img.src;

  img.addEventListener('mouseover', () => {
    changeImage(img, 'assets/images/Official_CSS_Logo.svg')
    img.style.width = '110px';
    img.style.transition = '0.5s ease';
  })
  img.addEventListener('mouseout', () => {
    img.src = orignalSrc;
    img.style.width = '100px'
  })
});

techImg3.forEach(img => {
  const orignalSrc = img.src;

  img.addEventListener('mouseover', () => {
    changeImage(img, 'assets/images/javascript-original.svg')
    img.style.width = '110px';
    img.style.transition = '0.5s ease';
  })
  img.addEventListener('mouseout', () => {
    img.src = orignalSrc;
    img.style.width = '100px'
  })
});

techImg4.forEach(img => {
  const orignalSrc = img.src;

  img.addEventListener('mouseover', () => {
    changeImage(img, 'assets/images/git-original.svg')
    img.style.width = '110px';
    img.style.transition = '0.5s ease';
  })
  img.addEventListener('mouseout', () => {
    img.src = orignalSrc;
    img.style.width = '100px'
  })
});

techImg5.forEach(img => {
  const orignalSrc = img.src;

  img.addEventListener('mouseover', () => {
    changeImage(img, 'assets/images/github-color-svgrepo-com.svg')
    img.style.width = '110px';
    img.style.transition = '0.5s ease';
  })
  img.addEventListener('mouseout', () => {
    img.src = orignalSrc;
    img.style.width = '100px'
  })
});

footerImg1.forEach(img => {
  const orignalSrc = img.src;

  img.addEventListener('mouseover', () => {
    changeImage(img, 'assets/images/linkedin-original.jpg')
    img.style.width = '90px';
    img.style.transition = '0.5s ease';

  })
  img.addEventListener('mouseout', () => {
    img.src = orignalSrc;
    img.style.width = '80px'
  })
});

footerImg2.forEach(img => {
  const orignalSrc = img.src;

  img.addEventListener('mouseover', () => {
    changeImage(img, 'assets/images/gmail colored.svg')
    img.style.width = '90px';
    img.style.transition = '0.5s ease';
  })
  img.addEventListener('mouseout', () => {
    img.src = orignalSrc;
    img.style.width = '80px'
  })
});

footerImg3.forEach(img => {
  const orignalSrc = img.src;

  img.addEventListener('mouseover', () => {
    changeImage(img, 'assets/images/github-colored-seeklogo.svg')
    img.style.width = '140px';
    img.style.transition = '0.5s ease';
  })
  img.addEventListener('mouseout', () => {
    img.src = orignalSrc;
    img.style.width = '80px'
  })
});