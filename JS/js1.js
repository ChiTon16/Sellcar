const data = [
  [
    {id: 1, thumbnail: '/IMG/Lamborred.jpg', color: 'red', type: 'Lambor'},
    {id: 2, thumbnail: '/IMG/lamborblue.jpg', color: 'blue', type: 'Lambor'},
    {id: 3, thumbnail: '/IMG/lamboryellow.jpg', color: 'yellow', type: 'Lambor'},
    {id: 4, thumbnail: '/IMG/lamborwhite.jpg', color: 'white', type: 'Lambor'},
  ],
  [
    {id: 1, thumbnail: '/IMG/ferrarired.jpg', color: 'red', type: 'Fera'},
    {id: 2, thumbnail: '/IMG/ferrariblue.jpg', color: 'blue', type: 'Fera'},
    {id: 3, thumbnail: '/IMG/ferrariyellow.jpg', color: 'yellow', type: 'Fera'},
    {id: 4, thumbnail: '/IMG/ferrariwhite.jpg', color: 'white', type: 'Fera'},
  ]
];

function Run() {
  document.addEventListener("DOMContentLoaded", () => {
    const selectcarEle = document.getElementById('selection-xe');
    const boxImagesElem = document.querySelector('.box-images');
    const quantityEle = document.getElementById('quantity');
    const colorBoxEle = document.querySelectorAll('.color-box');
    const inputImage = document.getElementById('image-container');
    const submitButton = document.getElementById('order');
    const resultEle = document.getElementById('Result');

      const renderImage = (value) => {
        boxImagesElem.innerHTML = data[value].map(item => `<img src="${item.thumbnail}" alt="${item.type}" class="imgcar">`).join('');
      }

      const showImage = (value) => {
        var elem = data[Number(selectcarEle.value)].find(item => item.color === value);
        inputImage.innerHTML = `<img src="${elem.thumbnail}" alt="${elem.type}" id="image-cars">`;
      }

      selectcarEle.onchange = (e) => {
        const colorElem = document.querySelector('.color-box.active');
        renderImage(Number(e.target.value));
        showImage(colorElem.value);
      }

      colorBoxEle.forEach(item => {
        item.onclick = (e) => {
          showImage(e.target.value);
          colorBoxEle.forEach(elem => {
            elem != item ? elem.classList.remove('active') : elem.classList.add('active');
          });
        }
      });

      submitButton.onclick = () => {
        const colorElem = document.querySelector('.color-box.active');
        resultEle.innerHTML = `Bạn đã đặt mua ${quantityEle.value} chiếc xe ${selectcarEle.value === '0' ? 'Lamborghini' : 'Ferari'} màu ${colorElem.value}`;
      }
  });
  
  return false;
}

Run();