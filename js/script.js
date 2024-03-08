/*
************** Definir os principais objetos **************
*/
const addnote = document.querySelector("#add-note");//Botão de para adicionar nota
let closeModal =  document.querySelector('#close-modal'); //fechar janela modal com os detalhes da nota.
let modal = document.querySelector('#modal'); //Modal para edição das notas
let modalView = document.querySelector('#modal-view'); //Modal para exibição dos detalhes da nota
let notes = document.querySelector('#notes');//Lista divs com dados das notas
let btnSaveNote = document.querySelector("#btn-save-note"); //icone para salvar nota
let btnCloseNote = document.querySelector("#btn-close-note");//icone para fechar modal de edição de nota.
/*
*********************** Eventos ***************************
*/
addnote.addEventListener('click', (evt)=>{
    evt.preventDefault();
    modal.style.display = 'block';
    notes.style.display = 'none';
    addnote.style.display = 'none';
});

btnCloseNote.addEventListener('click', (evt)=>{
    evt.preventDefault();
    modal.style.display = 'none';
    notes.style.display = 'flex';
    addnote.style.display = 'block';
});

btnSaveNote.addEventListener('click', (evt)=>{
    evt.preventDefault();

    let dados = {
        id: document.querySelector("#input-id").value,
        title: document.querySelector("#input-title").value,
        content: document.querySelector("#input-content").value,
        lastTime: new Date() .getTime(),
    }
    btnSaveNote(data);
});

/*
*********************** Funções ***************************
*/

const saveNote = (data) =>{

    let notes = localStorage.getItem('notes');

    if(!notes){
        notes = [];
    }else{
        notes = JSON.parse(notes);
    }
    if(data.id === undefined){
        data.id = new Date().getTime();
        notes.push(data);
    }
    notes.push(data);

    notes = JSON.stringify(notes);
    localStorage.setItem('notes', notes);
};

const listNotes = () =>{
    loadNotes();
}
const loadNotes = () =>{
    let notes = localStorage.getItem("notes");
    if(notes){
        notes = [];
    }else{
        notes =JSON.parse(notes);
    }
    return notes;
};