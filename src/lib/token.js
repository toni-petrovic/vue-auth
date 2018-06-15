module.exports = (function () {

    function tokenName(name) {
        name = name || this.currentToken;

        if ( ! name && this.other.call(this)) { name = 'other'; }
        else if ( ! name || name === 'default') { name = 'default'; }

        return name + '-' + this.options.tokenName;
    }

    return {
        get: function (name) {
            name = tokenName.call(this, name);
            let token = localStorage.getItem(name);
            // console.log('token get', name, token);
            return token;
        },

        set: function (name, token) {
            name = tokenName.call(this, name);
            // console.log('token set', name, token);
            if (token) {
                localStorage.setItem(name, token);
            }
        },

        delete: function (name) {
            name = tokenName.call(this, name);

            localStorage.removeItem(name);
        },

        expiring: function () {
            return false;
        }
    }

})();
