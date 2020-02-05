export const scrollToTop=()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



export const getDateAndTime=()=>{
    let d = new Date();
    let now = d.toISOString();
    return now;
}

