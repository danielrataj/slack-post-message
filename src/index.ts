import { createPiece, PieceAuth } from '@activepieces/pieces-framework';

import { postMessage } from './lib/actions/post-message';
import { PieceCategory } from '@activepieces/shared';

export const auth = PieceAuth.SecretText({
  displayName: 'OAuth Token',
  required: true,
  description: 'Use app/bot/user OAtuh token to authenticate with Slack.',
});

export const slackPostMessage = createPiece({
  displayName: 'Slack - Post message',
  auth,
  minimumSupportedRelease: '0.20.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/slack.png',
  categories: [PieceCategory.COMMUNICATION],
  authors: [
    '@devrelcz'
  ],
  actions: [postMessage],
  triggers: [],
});
