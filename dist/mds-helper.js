/* Mediadesain Helper
* Documentation https://bitbucket.org/mediadesain/javascript-mds-doc/src/javascript-mds-doc/
*
* Version 1.1.4
* Last Update 17-Aug-2021 
*/

// String
export const lowerCase = (str) => {
    return str.toLowerCase()
};
export const upperCase = (str) => {
    return str.toUpperCase()
};
export const titleCase = (str) => {
    return str.replace(/\b(\w)/g, k => k.toUpperCase())
};
export const pascalCase = (str) => {
    return str.toLowerCase().replace(/[^\w\s]/gi, ' ').replace(/(?:_| |\b)(\w)/g, (p1) => {
    return p1.toUpperCase() }).replace(/\s/g, '')
};
export const randomKarakter = (length) => {
    var chars = 'abcefghijklnopqrtuvwxyz0123456789'; //sample random karakter
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};
export const konfersiURLslug = (text) => {
    if (!text) return;
        var result = text.toLowerCase().replace('.', ' ').replace('-', ' ').replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    return result;
};
export const youtubeID = (url) => {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) return match[2];
    else return '';
};
export const youtubeEmbed = (val) =>{
    val = youtubeID(val)
    return 'https://www.youtube.com/embed/'+ val;
};
export const youtubeThumbnail = (val, size) =>{
    val = youtubeID(val)
    return 'https://i.ytimg.com/vi/'+val+'/'+size+'.jpg';
};

// Interger
export const perpendekAngka = (value) => {
    var suffixes = ["", "k", "m", "b","t"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue+suffixes[suffixNum];
}
export const mataUang = (money, format, code, decimal) => {
    return new Intl.NumberFormat(format,
        { style: 'currency', currency: code, minimumFractionDigits: decimal }
    ).format(money);
}

// Object
export const hapusObjValKosong = (obj) => {
    for (var namaProperty in obj) {
        if (obj[namaProperty] === null || obj[namaProperty] === undefined || obj[namaProperty] === "") {
            delete obj[namaProperty];
        }
    }
    return obj
};

// Array
export const hitungUnikValue = (data) => {
    var count = {};
    data.forEach((i) => {
        count[i] = (count[i] || 0) + 1;
    });
    return count
};
export const filterMultiple = (data, key, filterdata) => {
    filterdata = filterdata.join().toLocaleLowerCase().split(',')
    var newdata = []
    console.log(filterdata)
    data.filter( (a) => {
        var isArray = Array.isArray(a[key])
        if (a[key]){
            //If values of key is string
            if (!isArray){
                if (filterdata.indexOf(a[key].toLocaleLowerCase()) !== -1)
                    newdata.push(a)
            }
            //If values of key is Array
            if (isArray){
                a[key].forEach( (val) => {
                    if (filterdata.indexOf(val.toLocaleLowerCase()) !== -1)
                        newdata.push(a)
                });
            }
        }
    });
    return newdata
};
export const groupSeValue = (arr, key) => {
    const keyvalue = (a) => a[key]
    return arr.reduce((r, v, i, a, k = keyvalue(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
};
export const jumblahKan = (arr) => {
    return arr.reduce( (total,num) => total + num )
};
export const listObject = (arr, objectkey) => {
    var groupObj = {}
    for(const item of arr){
        var newobj = {};
        newobj[item[objectkey]] = item;
        Object.assign(groupObj, newobj);
    }
    return groupObj
};