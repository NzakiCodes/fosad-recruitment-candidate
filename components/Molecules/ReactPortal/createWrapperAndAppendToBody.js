export default function createWrapperAndAppendToBody(wrapperId){
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    wrapperElement.setAttribute('class','portal')
    window.document.body.appendChild(wrapperElement);
    return wrapperElement;
}