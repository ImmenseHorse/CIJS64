class TitleBar {
    $container;
    $txtName;
    $btnLogout;
    $btnShowSidebar;

    setSidebarVisible;

    constructor(setSidebarVisible) {
        this.setSidebarVisible = setSidebarVisible;

        this.$container = document.createElement('div');
        this.$container.classList.add('title-bar');

        this.$txtName = document.createElement('div');

        this.$btnShowSidebar = document.createElement('div');
        this.$btnShowSidebar.classList.add("btn-show-sidebar");
        this.$btnShowSidebar.innerHTML = "📚";
        this.$btnShowSidebar.addEventListener('click', this.showSideBar);

        this.$btnLogout = document.createElement('button');
        this.$btnLogout.classList.add("btn", 'btn-secondary');
        this.$btnLogout.innerHTML = "Log out!";
        this.$btnLogout.addEventListener("click", this.handleLogout);
    }

    showSideBar = () => {


    }
    handleLogout = () => {
        firebase.auth().signOut();
    };

    setName(name) {
        this.$txtName.innerHTML = name;
    }

    render() {
        const title = document.createElement('div');
        title.classList.add('flex');
        title.appendChild(this.$btnShowSidebar);
        title.appendChild(this.$txtName);

        this.$container.appendChild(title);
        this.$container.appendChild(this.$btnLogout);

        return this.$container;
    }
}

export { TitleBar };