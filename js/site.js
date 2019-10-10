function drawBoard(gridID) {
    for (gridrow=0; gridrow<12; gridrow++) {
        for (gridcolumn=0; gridcolumn<15; gridcolumn++) {   
            var customClass=(gridcolumn+'-'+gridrow);
            var parent = document.getElementById(gridID);
            var divnode = document.createElement('div');
            var attribute = document.createAttribute('class');
            if(isEven(gridrow)) {
                if(isEven(gridcolumn)) {
                    attribute.value = customClass+' frame'+' light-floor-2';
                } else {
                    attribute.value = customClass+' frame'+' dark-floor-2';
                }
            } else {
                if(isEven(gridcolumn)) {
                    attribute.value = customClass+' frame'+' dark-floor-2';
                } else {
                    attribute.value = customClass+' frame'+' light-floor-2';
                }
            }
            divnode.setAttributeNode(attribute);
            parent.appendChild(divnode);
        }
    }
}

function isEven(n){
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
}