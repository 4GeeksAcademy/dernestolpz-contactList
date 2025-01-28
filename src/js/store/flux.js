const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            listContacts: []
        },
        actions: {
            createUser: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/4geeks-user", {
                        method: "POST"
                    });
                    if (!response.ok) {
                        throw new Error("Error creating user: " + response.statusText);
                    }
                    const data = await response.json();
                    console.log("User created:", data);
                } catch (error) {
                    console.error(error);
                }
            },

            getInfoContacts: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/4geeks-user/contacts", {
                        method: "GET"
                    });
                    // Manejo específico para 404
                    if (response.status === 404) {
                        getActions().createUser();
                        return;
                    }
                    if (!response.ok) {
                        throw new Error("Error fetching contacts: " + response.statusText);
                    }
                    const data = await response.json();
                    setStore({ listContacts: data.contacts });
                } catch (error) {
                    console.error(error);
                }
            },

            addContactToList: (contact) => {
                const store = getStore();
                setStore({
                    ...store,
                    listContacts: [...store.listContacts, contact]
                });
            },

            createContact: async (payload) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/4geeks-user/contacts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    });
                    if (!response.ok) {
                        throw new Error("Error creating contact: " + response.statusText);
                    }
                    const data = await response.json();
                    console.log("Contact created:", data);
                    getActions().addContactToList(data);
                } catch (error) {
                    console.error(error);
                }
            },

            deleteContact: async (id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/4geeks-user/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (!response.ok) {
                        throw new Error("Error deleting contact: " + response.statusText);
                    }
                    const store = getStore();
                    const updatedContacts = store.listContacts.filter((contact) => contact.id !== id);
                    setStore({ listContacts: updatedContacts });
                    console.log(`Contact with ID ${id} deleted`);
                } catch (error) {
                    console.error(error);
                }
            },

            editContact: async (id, contact) => {
                try {
                    const store = getStore();
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/4geeks-user/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });
                    if (!response.ok) {
                        throw new Error("Error editing contact: " + response.statusText);
                    }
                    const data = await response.json();
                    const updatedList = store.listContacts.map((item) => {
                        if (item.id === id) return data;
                        return item;
                    });
                    setStore({ listContacts: updatedList });
                    console.log(`Contact with ID ${id} edited`);
                } catch (error) {
                    console.error(error);
                }
            }
        }
    };
};

export default getState;
