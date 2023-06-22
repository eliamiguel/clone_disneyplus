document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('[data-tab-button]');
  const quetions = document.querySelectorAll('[data-faq-question]')
  const herosSection = document.querySelector('.hero');
  const alturaHero = herosSection.clientHeight;
  window.addEventListener('scroll', function(){
    
    const posicoAtual= window.scrollY;
    if(posicoAtual < alturaHero){
      ocultaElementosDoHeader();
    } else {
      exibeElementosDoHeader();
    }

  })
    function ocultaElementosDoHeader() {
      const header =document.querySelector('header')
      header.classList.add('header-is-hidden');
    }
    function exibeElementosDoHeader() {
      const header =document.querySelector('header')
      header.classList.remove('header-is-hidden');
    }
  for (let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(botao){
      const abaAlvo = botao.target.dataset.tabButton; 
      const aba= document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add('shows__list__button--is-active');
      removeBotaoAtivo();  
      botao.target.classList.add('shows__list__button--is-active')                                                                                                                                                                                

    })
  }
  for (let i=0; i < quetions.length; i++){
    quetions[i].addEventListener('click', abreOuFechaResposta);
  }
})
function abreOuFechaResposta(elemento){
  const classe ='faq__questions__item-is-open';
  const elementopai = elemento.target.parentNode;
  elementopai.classList.toggle(classe)
}
function removeBotaoAtivo() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  for (let i=0; i < buttons.length; i++){
    buttons[i].classList.remove('shows__list__button--is-active')
  }
}
function escondeTodasAbas(){
      const tabsContainer = document.querySelectorAll('[data-tab-id]');

      for ( let i=0; i < tabsContainer.length; i++ ){
        tabsContainer[i].classList.remove('shows__list__button--is-active');
      }
}