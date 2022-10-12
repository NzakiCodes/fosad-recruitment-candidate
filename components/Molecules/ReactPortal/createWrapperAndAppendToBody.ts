export default function createWrapperAndAppendToBody(wrapperId:any){
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    wrapperElement.setAttribute('class','portal')
    window.document.body.appendChild(wrapperElement);
    return wrapperElement;
}