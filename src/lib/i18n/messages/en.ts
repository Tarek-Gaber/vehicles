import auth from './en/auth.json';
import common from './en/common.json';
import errors from './en/errors.json';
import messages from './en/messages.json';
import sidebar from './en/sidebar.json';
import validation from './en/validation.json';
import dashboard from './en/pages/dashboard.json';

export default {
  auth,
  common,
  errors,
  messages,
  sidebar,
  validation,
  pages: {
    dashboard,
  },
} as const;
