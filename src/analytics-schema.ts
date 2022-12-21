import {
  buildReportSchema,
  buildReportGroups,
  buildReportGroup,
  buildReportCards,
  buildSessionsCard,
  SessionInteractionType,
} from '@ombori/grid-reports';

/**
 * This file declares customized analytics reports that would be displayed for an application.
 */

const reportSchema = buildReportSchema({
  groups: buildReportGroups(
    buildReportGroup({
      name: 'Overview',
      cards: buildReportCards(
        buildSessionsCard({
          interactionType: SessionInteractionType.Interactive,
        }),
      ),
    })
  ),
});

export default reportSchema;
