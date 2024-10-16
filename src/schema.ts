import { z } from 'zod';

/**
 * Schema for resume generated from https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json
 * with help of https://stefanterdell.github.io/json-schema-to-zod-react/
 *
 * This schema has been modified with the following changes:
 * - added an optional `private` field to the root object
 * - catch-all converted to any's has been removed
 */
export const resumeSchema = z
  .object({
    private: z.boolean().optional(),
    $schema: z
      .string()
      .url()
      .describe(
        'link to the version of the schema that can validate the resume',
      )
      .optional(),
    basics: z
      .object({
        name: z.string().optional(),
        label: z.string().describe('e.g. Web Developer').optional(),
        image: z
          .string()
          .describe('URL (as per RFC 3986) to a image in JPEG or PNG format')
          .optional(),
        email: z.string().email().describe('e.g. thomas@gmail.com').optional(),
        phone: z
          .string()
          .describe(
            'Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923',
          )
          .optional(),
        url: z
          .string()
          .url()
          .describe(
            'URL (as per RFC 3986) to your website, e.g. personal homepage',
          )
          .optional(),
        summary: z
          .string()
          .describe('Write a short 2-3 sentence biography about yourself')
          .optional(),
        location: z
          .object({
            address: z
              .string()
              .describe(
                'To add multiple address lines, use \n. For example, 1234 Glücklichkeit Straße\nHinterhaus 5. Etage li.',
              )
              .optional(),
            postalCode: z.string().optional(),
            city: z.string().optional(),
            countryCode: z
              .string()
              .describe('code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN')
              .optional(),
            region: z
              .string()
              .describe(
                'The general region where you live. Can be a US state, or a province, for instance.',
              )
              .optional(),
          })
          .strict()
          .optional(),
        profiles: z
          .array(
            z
              .object({
                network: z
                  .string()
                  .describe('e.g. Facebook or Twitter')
                  .optional(),
                username: z
                  .string()
                  .describe('e.g. neutralthoughts')
                  .optional(),
                url: z
                  .string()
                  .url()
                  .describe('e.g. http://twitter.example.com/neutralthoughts')
                  .optional(),
              })
              .strict(),
          )
          .describe(
            'Specify any number of social networks that you participate in',
          )
          .optional(),
      })
      .strict()
      .optional(),
    work: z
      .array(
        z
          .object({
            name: z.string().describe('e.g. Facebook').optional(),
            location: z.string().describe('e.g. Menlo Park, CA').optional(),
            description: z
              .string()
              .describe('e.g. Social Media Company')
              .optional(),
            position: z.string().describe('e.g. Software Engineer').optional(),
            url: z
              .string()
              .url()
              .describe('e.g. http://facebook.example.com')
              .optional(),
            startDate: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            endDate: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            summary: z
              .string()
              .describe(
                'Give an overview of your responsibilities at the company',
              )
              .optional(),
            highlights: z
              .array(
                z
                  .string()
                  .describe(
                    'e.g. Increased profits by 20% from 2011-2012 through viral advertising',
                  ),
              )
              .describe('Specify multiple accomplishments')
              .optional(),
          })
          .strict(),
      )
      .optional(),
    volunteer: z
      .array(
        z
          .object({
            organization: z.string().describe('e.g. Facebook').optional(),
            position: z.string().describe('e.g. Software Engineer').optional(),
            url: z
              .string()
              .url()
              .describe('e.g. http://facebook.example.com')
              .optional(),
            startDate: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            endDate: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            summary: z
              .string()
              .describe(
                'Give an overview of your responsibilities at the company',
              )
              .optional(),
            highlights: z
              .array(
                z
                  .string()
                  .describe(
                    'e.g. Increased profits by 20% from 2011-2012 through viral advertising',
                  ),
              )
              .describe('Specify accomplishments and achievements')
              .optional(),
          })
          .strict(),
      )
      .optional(),
    education: z
      .array(
        z
          .object({
            institution: z
              .string()
              .describe('e.g. Massachusetts Institute of Technology')
              .optional(),
            url: z
              .string()
              .url()
              .describe('e.g. http://facebook.example.com')
              .optional(),
            area: z.string().describe('e.g. Arts').optional(),
            studyType: z.string().describe('e.g. Bachelor').optional(),
            startDate: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            endDate: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            score: z
              .string()
              .describe('grade point average, e.g. 3.67/4.0')
              .optional(),
            courses: z
              .array(
                z
                  .string()
                  .describe('e.g. H1302 - Introduction to American history'),
              )
              .describe('List notable courses/subjects')
              .optional(),
          })
          .strict(),
      )
      .optional(),
    awards: z
      .array(
        z
          .object({
            title: z
              .string()
              .describe('e.g. One of the 100 greatest minds of the century')
              .optional(),
            date: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            awarder: z.string().describe('e.g. Time Magazine').optional(),
            summary: z
              .string()
              .describe('e.g. Received for my work with Quantum Physics')
              .optional(),
          })
          .strict(),
      )
      .describe(
        'Specify any awards you have received throughout your professional career',
      )
      .optional(),
    certificates: z
      .array(
        z
          .object({
            name: z
              .string()
              .describe('e.g. Certified Kubernetes Administrator')
              .optional(),
            date: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            url: z
              .string()
              .url()
              .describe('e.g. http://example.com')
              .optional(),
            issuer: z.string().describe('e.g. CNCF').optional(),
          })
          .strict(),
      )
      .describe(
        'Specify any certificates you have received throughout your professional career',
      )
      .optional(),
    publications: z
      .array(
        z
          .object({
            name: z.string().describe('e.g. The World Wide Web').optional(),
            publisher: z
              .string()
              .describe('e.g. IEEE, Computer Magazine')
              .optional(),
            releaseDate: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            url: z
              .string()
              .url()
              .describe(
                'e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html',
              )
              .optional(),
            summary: z
              .string()
              .describe(
                'Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.',
              )
              .optional(),
          })
          .strict(),
      )
      .describe('Specify your publications through your career')
      .optional(),
    skills: z
      .array(
        z
          .object({
            name: z.string().describe('e.g. Web Development').optional(),
            level: z.string().describe('e.g. Master').optional(),
            keywords: z
              .array(z.string().describe('e.g. HTML'))
              .describe('List some keywords pertaining to this skill')
              .optional(),
          })
          .catchall(z.any()),
      )
      .describe('List out your professional skill-set')
      .optional(),
    languages: z
      .array(
        z
          .object({
            language: z.string().describe('e.g. English, Spanish').optional(),
            fluency: z.string().describe('e.g. Fluent, Beginner').optional(),
          })
          .strict(),
      )
      .describe('List any other languages you speak')
      .optional(),
    interests: z
      .array(
        z
          .object({
            name: z.string().describe('e.g. Philosophy').optional(),
            keywords: z
              .array(z.string().describe('e.g. Friedrich Nietzsche'))
              .optional(),
          })
          .strict(),
      )
      .optional(),
    references: z
      .array(
        z
          .object({
            name: z.string().describe('e.g. Timothy Cook').optional(),
            reference: z
              .string()
              .describe(
                'e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.',
              )
              .optional(),
          })
          .strict(),
      )
      .describe('List references you have received')
      .optional(),
    projects: z
      .array(
        z
          .object({
            name: z.string().describe('e.g. The World Wide Web').optional(),
            description: z
              .string()
              .describe(
                'Short summary of project. e.g. Collated works of 2017.',
              )
              .optional(),
            highlights: z
              .array(
                z
                  .string()
                  .describe('e.g. Directs you close but not quite there'),
              )
              .describe('Specify multiple features')
              .optional(),
            keywords: z
              .array(z.string().describe('e.g. AngularJS'))
              .describe('Specify special elements involved')
              .optional(),
            startDate: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            endDate: z
              .string()
              .regex(
                new RegExp(
                  '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$',
                ),
              )
              .describe(
                'Similar to the standard date type, but each section after the year is optional. e.g. 2014-06-29 or 2023-04',
              )
              .optional(),
            url: z
              .string()
              .url()
              .describe(
                'e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html',
              )
              .optional(),
            roles: z
              .array(z.string().describe('e.g. Team Lead, Speaker, Writer'))
              .describe('Specify your role on this project or in company')
              .optional(),
            entity: z
              .string()
              .describe(
                "Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'",
              )
              .optional(),
            type: z
              .string()
              .describe(
                " e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'",
              )
              .optional(),
          })
          .strict(),
      )
      .describe('Specify career projects')
      .optional(),
    meta: z
      .object({
        canonical: z
          .string()
          .url()
          .describe('URL (as per RFC 3986) to latest version of this document')
          .optional(),
        version: z
          .string()
          .describe('A version field which follows semver - e.g. v1.0.0')
          .optional(),
        lastModified: z
          .string()
          .describe('Using ISO 8601 with YYYY-MM-DDThh:mm:ss')
          .optional(),
      })
      .describe(
        'The schema version and any other tooling configuration lives here',
      )
      .strict()
      .optional(),
  })
  .strict();

export type ResumeSchema = z.infer<typeof resumeSchema>;
