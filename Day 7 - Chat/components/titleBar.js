class TitleBar {
    $container;
    $txtName;
    $btnLogout;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('flex', 'justify-between');

        this.$txtName = document.createElement('div');

        this.$btnLogout = document.createElement('button');
        this.$btnLogout.innerHTML = "Logout";

        this.$btnLogout.addEventListener("click", this.handleLogout);
    }

    handleLogout = () => {
        firebase.auth().signOut();
    };

    setName(name) {
        this.$txtName.innerHTML = name;
    }

    render() {
        this.$container.appendChild(this.$txtName);
        this.$container.appendChild(this.$btnLogout);

        return this.$container;
    }
}

export { TitleBar };