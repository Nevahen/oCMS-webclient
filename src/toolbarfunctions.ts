function heading1(txt, elementData){
    
        let str = "# "
        return[txt.slice(0, elementData.selectionStart), str, txt.slice(elementData.selectionStart)].join('');


}

function link(txt, elementData){

    
    if(elementData.selectionType === 'point'){
        const str = "[Link description](Link url)"
        return [txt.slice(0, elementData.selectionStart), str, txt.slice(elementData.selectionStart)].join('');
    }

    else{

        let sub = txt.substr(elementData.selectionStart, elementData.selectionLength)
        let str = `[${sub}](Link URL)`;
        return [txt.slice(0, elementData.selectionStart), str, txt.slice(elementData.selectionEnd)].join('');
    }


}

function checkElement(ref){

    var findings = {}

    if(ref.selectionStart === ref.selectionEnd){
        findings['selectionType'] = 'point'
    }
    else{
        findings['selectionType'] = 'selection'
        findings['selectionLength'] = ref.selectionEnd - ref.selectionStart;
    }

    findings['selectionStart'] = ref.selectionStart;
    findings['selectionEnd'] = ref.selectionEnd;
    findings['length'] = ref.textLength;


    return findings;
}

export function doOperation(operation, text, ref){

    const elementData = checkElement(ref);
    console.log(operation)

    switch(operation){
        
        case 'h1':{
            return heading1(text,elementData);
        }

        case 'link':{
            return link(text,elementData)
        }

        default:{
            break;
        }
    }
}