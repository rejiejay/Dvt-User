let config = (() => {
    let NODE_ENV = process.env.NODE_ENV || '';

    if (NODE_ENV === 'development') {
        let URLbase = 'http://192.168.0.100:8080';

        return {
            URLbase: URLbase,
            URLversion: `${URLbase}/Dvt-web`,
            URLvillage: `${URLbase}/Dvt-reserve`
        }
    } else {
        // let URLbase = 'http://112.74.92.97:8080'
        let URLbase = `${document.location.protocol}//112.74.92.97:${document.location.protocol === 'https:' ? '8443' :'8080'}`;

        return {
            URLbase: URLbase,
            URLversion: `${URLbase}/dvtweb`,
            URLvillage: `${URLbase}/dvtreserve`
        }
    }
})();

export default config
