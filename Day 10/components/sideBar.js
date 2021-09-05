import { ConversationItem } from './conversationItem.js';
import { CreateConversationModal } from './createConversationModal.js';

class SideBar {
    $container;
    $btnCreateConversation;
    $conversationList;
    $createConversationModal;
    setActiveConversation;
    $listConversationItem;
    updateActiveConversation;
    activeConversation;

    constructor(setActiveConversation, updateActiveConversation) {
        this.$bgContainer = document.createElement("div");
        this.$bgContainer.classList.add('sidebar-container');
        this.$bgContainer.addEventListener('click', )

        this.$btnCreateConversation = document.createElement('button');
        this.$btnCreateConversation.innerHTML = "+ New";
        this.$btnCreateConversation.classList.add('btn', 'btn-primary', 'btn-block');
        this.$btnCreateConversation.addEventListener('click', this.handleCreateConversation);
        this.$createConversationModal = new CreateConversationModal();

        this.$conversationList = document.createElement('div');
        this.$conversationList.classList.add('conversation-list');
        this.setActiveConversation = setActiveConversation;
        this.updateActiveConversation = updateActiveConversation;

        this.$listConversationItem = [];

        db.collection('conversations')
            .where("users", 'array-contains', firebase.auth().currentUser.email)
            .onSnapshot(this.conversationListener);
    };

    handleCreateConversation = () => {
        this.$createConversationModal.setVisible(true);
    }

    conversationListener = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const conversation = change.doc.data();
            const id = change.doc.id;

            if (change.type === "added") {
                const $conversationItem = new ConversationItem(
                    id,
                    conversation.name,
                    conversation.users,
                    this.setActiveConversation
                );

                this.$listConversationItem.push($conversationItem);
                this.$conversationList.appendChild($conversationItem.render());
            } else if (change.type === 'modified') {
                const modifyingConversation = this.$listConversationItem.find(
                    (item) => {
                        return item.id === id;
                    }
                );
                modifyingConversation.updateData(conversation.name, conversation.users);
                if (id === this.activeConversation.id) {
                    this.updateActiveConversation(conversation.name, conversation.users);
                }
            }

        });
    };

    setConversation = (conversation) => {
        this.activeConversation = conversation;
        this.$listConversationItem.forEach((item) => {
            if (item.id === conversation.id) {
                item.setActive(true);
            } else {
                item.setActive(false);
            }
        })

    }

    setBgContainerVisible = (visible) => {
        if (visible) {
            this.$bgContainer.classList
        }
    }

    render() {
        this.$container.appendChild(this.$btnCreateConversation);
        this.$container.appendChild(this.$conversationList);
        this.$container.appendChild(this.$createConversationModal.render());
        return this.$container;
    }
}

export { SideBar };