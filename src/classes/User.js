class User {
    #id;
    #pseudo;
    #email;
    #image;
    #password;
    #id_droit;


    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get pseudo() {
        return this.#pseudo;
    }

    set pseudo(value) {
        this.#pseudo = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get image() {
        return this.#image;
    }

    set image(value) {
        this.#image = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }

    get id_droit() {
        return this.#id_droit;
    }

    set id_droit(value) {
        this.#id_droit = value;
    }
}

export default User