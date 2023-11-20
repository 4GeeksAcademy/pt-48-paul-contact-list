const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContacts: async () => {
				try {
					const response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/agenda/Paulmak21"
					);
					if (response.ok) {
						const data = await response.json();
						let store = getStore();
						setStore({ ...store, Contacts: data });
						console.log(store.Contacts)
					}
				} catch (error) {
					console.error("Error fetching :", error);
				}
			},


				// const store = getStore();
				// return store.contacts;
			addContact: async (data) => {
				try {
				  const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
				    method: 'POST',
				    headers: {
					'Content-Type': 'application/json',
				    },
				    body: JSON.stringify(data),
				  });
				  if (!response.ok) {
				    throw new Error(`HTTP error! status: ${response.status}`);
				  }
				  const respondeData = await response.json();
				  console.log(respondeData);
				} catch (error) {
				  console.error("Error:", error);
				};
			},

			deleteContact: async (contactId) => {
			try {
				const response = await fetch(
				    `https://playground.4geeks.com/apis/fake/contact/${contactId}`,
				    {
					  method: "DELETE"
				    }
				);
				if (response.ok) {
				    // Manejar la eliminación exitosa
				    console.log(`Contacto con ID ${contactId} eliminado exitosamente.`);
				    // Actualizar la lista de contactos después de eliminar
				    actions.getContacts();
				} else {
				    console.error("Error al borrar el contacto.");
				}
			  } catch (error) {
				console.error("Error al realizar la solicitud DELETE:", error);
			  }
		}
	}
};
};
export default getState;
