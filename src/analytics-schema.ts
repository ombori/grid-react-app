import { AnalyticsSchema, CardType, SessionInteractionType } from '@ombori/grid-reports';

/**
 * This file declares customized analytics reports that would be displayed for an application.
 */

const analyticsSchema: AnalyticsSchema = {
  groups: [
    {
      name: 'Overview',
      cards: [
        { type: CardType.Sessions, interactionType: SessionInteractionType.Interactive },
      ],
    },
  ],
};

export default analyticsSchema;
