const sec = 1000; // 1 sec

const intervalId = setInterval(() => {
    const companyDiv = u('.setting-nav_user-company');
    if (companyDiv.length != 0) {
        clearInterval(intervalId);
        const companyName = companyDiv.text();
        u('body').prepend(decorateName(companyName));
    }
}, sec);

const decorateName = (companyName) => {
    const style = 'font-size:12px; position:absolute; z-index:1; background:#323442; color:#ffffff; padding:2px;';
    return '<div style="' + style + '">' + companyName + '</div>';
}
