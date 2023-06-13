import { actions as searchActions } from "./SearchContacts";
import { actions as contactDetailsActions } from "./ContactDetails";

export const updateSearchPhrase = newPhrase =>
  (dispatch, getState, { httpApi }) => {
    dispatch(
      searchActions.updateSearchPhraseStart({ newPhrase }),
    );
    httpApi.getFirst5MatchingContacts({ namePart: newPhrase })
      .then(({ data }) => {
        const matchingContacts = data.map(contact => ({
          id: contact.id,
          value: contact.name,
        }));
        // TODO something is wrong here (FIXED)
        dispatch(
          searchActions.updateSearchPhraseSuccess({ matchingContacts  }),
        );
      })
      .catch(() => {
        // TODO something is missing here (FIXED)
        searchActions.updateSearchPhraseFailure();
      });
  };

export const selectMatchingContact = selectedMatchingContact =>
  (dispatch, getState, { httpApi, dataCache, debounce }) => {

    // TODO something is missing here (FIXED)
    const getContactDetails =  ({ id }) => {
      return httpApi
          .getContact({ contactId: id })
          .then(({ data }) => ({
            id: data.id,
            name: data.name,
            phone: data.phone,
            addressLines: data.addressLines,
          }));
    };

    dispatch(
      searchActions.selectMatchingContact({ selectedMatchingContact }),
    );

    dispatch(
      contactDetailsActions.fetchContactDetailsStart(),
    );

    getContactDetails({ id: selectedMatchingContact.id })
      .then((contactDetails) => {
        // TODO something is missing here (X)
        dataCache.store({
          key: contactDetails.id,
          value: contactDetails.value
        });
        // TODO something is wrong here (FIXED)
        dispatch(
          contactDetailsActions.fetchContactDetailsSuccess({ contactDetails }),
        );
      })
      .catch(() => {
        dispatch(
          contactDetailsActions.fetchContactDetailsFailure(),
        );
      });
  };
