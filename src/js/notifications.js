import * as PNotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


   const notification = {
  onSucsessNotification() {
    PNotify.success({
  title: 'Success!',
      text: 'We found country u was looking for!!!.', hide:true,delay:500
  
});
  },
  onErrorNotification() {
    PNotify.error({
      delay: 3000,
  title: 'Oh No!',
  text: 'There is no such a country....', hide:true,delay:500
});
  },
  onTooManyResults() {
    PNotify.info({
  title: 'More specific',
  text: 'Too many matches found.Please be more specific query!', hide:true,delay:500
});
  }
}

export default notification