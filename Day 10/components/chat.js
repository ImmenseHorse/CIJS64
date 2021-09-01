import { MessageArea } from './messageArea.js';
import { SideBar } from './sideBar.js';
import { TitleBar } from "./titleBar.js";
import { InfoPanel } from "./infoPanel.js";

class Chat {
    activeConversation;
    $container;
    $sideBar;
    $titleBar;
    $messageArea;
    $infoPanel;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("flex", 'h-screen');

        this.$sideBar = new SideBar(
            this.setActiveConversation,
            this.updateActiveConversation);
        this.$titleBar = new TitleBar();
        this.$messageArea = new MessageArea();
        this.$infoPanel = new InfoPanel();

        this.activeConversation = null;
    };

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        this.$titleBar.setName(this.activeConversation.name);
        this.$sideBar.setConversation(this.activeConversation);
        this.$messageArea.setConversation(this.activeConversation);
        this.$infoPanel.setActiveConversation(this.activeConversation);
    };

    updateActiveConversation = (name, users) => {
        this.$infoPanel.updateActiveConversation(name, users);
    }

    render() {
        this.$container.appendChild(this.$sideBar.render());

        const chatArea = document.createElement('div');
        chatArea.classList.add('flex', 'flex-1', 'flex-col');
        chatArea.appendChild(this.$titleBar.render());

        const messageAreaContainer = document.createElement('div');
        messageAreaContainer.classList.add('flex', 'flex-1');
        messageAreaContainer.style.borderTop = "1px solid #ececec";
        messageAreaContainer.appendChild(this.$messageArea.render());
        messageAreaContainer.appendChild(this.$infoPanel.render());

        chatArea.appendChild(messageAreaContainer);

        this.$container.appendChild(chatArea);
        return this.$container;
    }
}

export { Chat };