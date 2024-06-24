// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | ColorsSlice
  | ChipSlice
  | CtaSlice
  | DarkerSlice
  | DoubleTextSlice
  | OpenerSlice
  | MountingSlice
  | ImageOpenerSlice
  | PowerSlice
  | SpaceSlice
  | SpecsSlice
  | ThicknessSlice
  | AboutContentSlice
  | WelcomeSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *AboutContent → Default → Primary*
 */
export interface AboutContentSliceDefaultPrimary {
  /**
   * Text 1 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.text_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_1: prismic.RichTextField;

  /**
   * Text 2 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.text_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_2: prismic.RichTextField;

  /**
   * Text 3 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.text_3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_3: prismic.RichTextField;

  /**
   * Image 1 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.image_1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_1: prismic.ImageField<never>;

  /**
   * Caption 1 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.caption_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption_1: prismic.RichTextField;

  /**
   * Image 2 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.image_2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_2: prismic.ImageField<never>;

  /**
   * Caption 2 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.caption_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption_2: prismic.RichTextField;

  /**
   * Image 3 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.image_3
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_3: prismic.ImageField<never>;

  /**
   * Caption 3 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.caption_3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption_3: prismic.RichTextField;

  /**
   * Image 4 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.image_4
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_4: prismic.ImageField<never>;

  /**
   * Caption 4 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.caption_4
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption_4: prismic.RichTextField;

  /**
   * Image 5 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.image_5
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_5: prismic.ImageField<never>;

  /**
   * Caption 5 field in *AboutContent → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_content.default.primary.caption_5
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption_5: prismic.RichTextField;
}

/**
 * Default variation for AboutContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutContentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutContent*
 */
type AboutContentSliceVariation = AboutContentSliceDefault;

/**
 * AboutContent Shared Slice
 *
 * - **API ID**: `about_content`
 * - **Description**: AboutContent
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutContentSlice = prismic.SharedSlice<
  "about_content",
  AboutContentSliceVariation
>;

/**
 * Primary content in *Chip → Default → Primary*
 */
export interface ChipSliceDefaultPrimary {
  /**
   * Max Number field in *Chip → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: chip.default.primary.max_number
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  max_number: prismic.NumberField;

  /**
   * Fade In Text field in *Chip → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: chip.default.primary.fade_in_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fade_in_text: prismic.KeyTextField;

  /**
   * Headline field in *Chip → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: chip.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;

  /**
   * Sub Headline field in *Chip → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: chip.default.primary.sub_headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_headline: prismic.RichTextField;

  /**
   * Text field in *Chip → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: chip.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Video field in *Chip → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: chip.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;
}

/**
 * Default variation for Chip Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ChipSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ChipSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Chip*
 */
type ChipSliceVariation = ChipSliceDefault;

/**
 * Chip Shared Slice
 *
 * - **API ID**: `chip`
 * - **Description**: Chip
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ChipSlice = prismic.SharedSlice<"chip", ChipSliceVariation>;

/**
 * Primary content in *Colors → Default → Primary*
 */
export interface ColorsSliceDefaultPrimary {
  /**
   * Video field in *Colors → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: colors.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;

  /**
   * Text 1 field in *Colors → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: colors.default.primary.text_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_1: prismic.RichTextField;

  /**
   * Text 2 field in *Colors → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: colors.default.primary.text_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_2: prismic.RichTextField;
}

/**
 * Default variation for Colors Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ColorsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ColorsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Colors*
 */
type ColorsSliceVariation = ColorsSliceDefault;

/**
 * Colors Shared Slice
 *
 * - **API ID**: `colors`
 * - **Description**: Colors
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ColorsSlice = prismic.SharedSlice<"colors", ColorsSliceVariation>;

/**
 * Primary content in *Cta → Default → Primary*
 */
export interface CtaSliceDefaultPrimary {
  /**
   * Button Text 1 field in *Cta → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.default.primary.button_text_1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text_1: prismic.KeyTextField;

  /**
   * Button Link 1 field in *Cta → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.default.primary.button_link_1
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link_1: prismic.LinkField;

  /**
   * Button Text 2 field in *Cta → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.default.primary.button_text_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text_2: prismic.KeyTextField;

  /**
   * Button Link 2 field in *Cta → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.default.primary.button_link_2
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link_2: prismic.LinkField;

  /**
   * Headline field in *Cta → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;
}

/**
 * Default variation for Cta Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CtaSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Cta*
 */
type CtaSliceVariation = CtaSliceDefault;

/**
 * Cta Shared Slice
 *
 * - **API ID**: `cta`
 * - **Description**: Cta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CtaSlice = prismic.SharedSlice<"cta", CtaSliceVariation>;

/**
 * Primary content in *Darker → Default → Primary*
 */
export interface DarkerSliceDefaultPrimary {
  /**
   * Video field in *Darker → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: darker.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;

  /**
   * Headline field in *Darker → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: darker.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;

  /**
   * Sub Headline field in *Darker → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: darker.default.primary.sub_headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_headline: prismic.RichTextField;

  /**
   * Text 1 field in *Darker → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: darker.default.primary.text_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_1: prismic.RichTextField;

  /**
   * Text 2 field in *Darker → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: darker.default.primary.text_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_2: prismic.RichTextField;

  /**
   * Text 3 field in *Darker → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: darker.default.primary.text_3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_3: prismic.RichTextField;
}

/**
 * Default variation for Darker Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DarkerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DarkerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Darker*
 */
type DarkerSliceVariation = DarkerSliceDefault;

/**
 * Darker Shared Slice
 *
 * - **API ID**: `darker`
 * - **Description**: Darker
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DarkerSlice = prismic.SharedSlice<"darker", DarkerSliceVariation>;

/**
 * Primary content in *DoubleText → Default → Primary*
 */
export interface DoubleTextSliceDefaultPrimary {
  /**
   * Headline field in *DoubleText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: double_text.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;

  /**
   * Text field in *DoubleText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: double_text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for DoubleText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DoubleTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DoubleTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *DoubleText*
 */
type DoubleTextSliceVariation = DoubleTextSliceDefault;

/**
 * DoubleText Shared Slice
 *
 * - **API ID**: `double_text`
 * - **Description**: DoubleText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DoubleTextSlice = prismic.SharedSlice<
  "double_text",
  DoubleTextSliceVariation
>;

/**
 * Primary content in *ImageOpener → Default → Primary*
 */
export interface ImageOpenerSliceDefaultPrimary {
  /**
   * Headline field in *ImageOpener → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_opener.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;

  /**
   * Image field in *ImageOpener → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_opener.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageOpener Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageOpenerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageOpenerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageOpener*
 */
type ImageOpenerSliceVariation = ImageOpenerSliceDefault;

/**
 * ImageOpener Shared Slice
 *
 * - **API ID**: `image_opener`
 * - **Description**: ImageOpener
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageOpenerSlice = prismic.SharedSlice<
  "image_opener",
  ImageOpenerSliceVariation
>;

/**
 * Primary content in *Mounting → Default → Primary*
 */
export interface MountingSliceDefaultPrimary {
  /**
   * Video field in *Mounting → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: mounting.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;

  /**
   * Text 1 field in *Mounting → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: mounting.default.primary.text_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_1: prismic.RichTextField;

  /**
   * Text 2 field in *Mounting → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: mounting.default.primary.text_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_2: prismic.RichTextField;
}

/**
 * Default variation for Mounting Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MountingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MountingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Mounting*
 */
type MountingSliceVariation = MountingSliceDefault;

/**
 * Mounting Shared Slice
 *
 * - **API ID**: `mounting`
 * - **Description**: Mounting
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MountingSlice = prismic.SharedSlice<
  "mounting",
  MountingSliceVariation
>;

/**
 * Primary content in *Opener → Default → Primary*
 */
export interface OpenerSliceDefaultPrimary {
  /**
   * Headline field in *Opener → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: opener.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline: prismic.KeyTextField;

  /**
   * Subheadline field in *Opener → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: opener.default.primary.subheadline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheadline: prismic.RichTextField;
}

/**
 * Default variation for Opener Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OpenerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OpenerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Opener*
 */
type OpenerSliceVariation = OpenerSliceDefault;

/**
 * Opener Shared Slice
 *
 * - **API ID**: `opener`
 * - **Description**: Opener
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OpenerSlice = prismic.SharedSlice<"opener", OpenerSliceVariation>;

/**
 * Primary content in *Power → Default → Primary*
 */
export interface PowerSliceDefaultPrimary {
  /**
   * Sub Headline field in *Power → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: power.default.primary.sub_headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_headline: prismic.RichTextField;

  /**
   * Headline field in *Power → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: power.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;

  /**
   * Text 1 field in *Power → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: power.default.primary.text_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_1: prismic.RichTextField;

  /**
   * Text 2 field in *Power → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: power.default.primary.text_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_2: prismic.RichTextField;

  /**
   * Video field in *Power → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: power.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  video: prismic.ImageField<never>;
}

/**
 * Default variation for Power Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PowerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PowerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Power*
 */
type PowerSliceVariation = PowerSliceDefault;

/**
 * Power Shared Slice
 *
 * - **API ID**: `power`
 * - **Description**: Power
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PowerSlice = prismic.SharedSlice<"power", PowerSliceVariation>;

/**
 * Primary content in *Space → Default → Primary*
 */
export interface SpaceSliceDefaultPrimary {
  /**
   * Headline field in *Space → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: space.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline: prismic.KeyTextField;

  /**
   * Sub Headline field in *Space → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: space.default.primary.sub_headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_headline: prismic.RichTextField;

  /**
   * Video field in *Space → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: space.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;

  /**
   * Text 1 field in *Space → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: space.default.primary.text_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_1: prismic.RichTextField;

  /**
   * Text 2 field in *Space → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: space.default.primary.text_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_2: prismic.RichTextField;
}

/**
 * Default variation for Space Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpaceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SpaceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Space*
 */
type SpaceSliceVariation = SpaceSliceDefault;

/**
 * Space Shared Slice
 *
 * - **API ID**: `space`
 * - **Description**: Space
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpaceSlice = prismic.SharedSlice<"space", SpaceSliceVariation>;

/**
 * Item in *Specs → Default → Primary → Table*
 */
export interface SpecsSliceDefaultPrimaryTableItem {
  /**
   * Label field in *Specs → Default → Primary → Table*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: specs.default.primary.table[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Content field in *Specs → Default → Primary → Table*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: specs.default.primary.table[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *Specs → Default → Primary*
 */
export interface SpecsSliceDefaultPrimary {
  /**
   * Headline field in *Specs → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: specs.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;

  /**
   * Table field in *Specs → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: specs.default.primary.table[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  table: prismic.GroupField<Simplify<SpecsSliceDefaultPrimaryTableItem>>;
}

/**
 * Default variation for Specs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpecsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SpecsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Specs*
 */
type SpecsSliceVariation = SpecsSliceDefault;

/**
 * Specs Shared Slice
 *
 * - **API ID**: `specs`
 * - **Description**: Specs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpecsSlice = prismic.SharedSlice<"specs", SpecsSliceVariation>;

/**
 * Primary content in *Thickness → Default → Primary*
 */
export interface ThicknessSliceDefaultPrimary {
  /**
   * Headline field in *Thickness → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: thickness.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;

  /**
   * Text field in *Thickness → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: thickness.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Video field in *Thickness → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: thickness.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;
}

/**
 * Default variation for Thickness Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ThicknessSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ThicknessSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Thickness*
 */
type ThicknessSliceVariation = ThicknessSliceDefault;

/**
 * Thickness Shared Slice
 *
 * - **API ID**: `thickness`
 * - **Description**: Thickness
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ThicknessSlice = prismic.SharedSlice<
  "thickness",
  ThicknessSliceVariation
>;

/**
 * Primary content in *Welcome → Default → Primary*
 */
export interface WelcomeSliceDefaultPrimary {
  /**
   * Headline field in *Welcome → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headline: prismic.RichTextField;

  /**
   * Image field in *Welcome → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Button Text field in *Welcome → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Welcome → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for Welcome Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelcomeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WelcomeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Welcome*
 */
type WelcomeSliceVariation = WelcomeSliceDefault;

/**
 * Welcome Shared Slice
 *
 * - **API ID**: `welcome`
 * - **Description**: Welcome
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelcomeSlice = prismic.SharedSlice<
  "welcome",
  WelcomeSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutContentSlice,
      AboutContentSliceDefaultPrimary,
      AboutContentSliceVariation,
      AboutContentSliceDefault,
      ChipSlice,
      ChipSliceDefaultPrimary,
      ChipSliceVariation,
      ChipSliceDefault,
      ColorsSlice,
      ColorsSliceDefaultPrimary,
      ColorsSliceVariation,
      ColorsSliceDefault,
      CtaSlice,
      CtaSliceDefaultPrimary,
      CtaSliceVariation,
      CtaSliceDefault,
      DarkerSlice,
      DarkerSliceDefaultPrimary,
      DarkerSliceVariation,
      DarkerSliceDefault,
      DoubleTextSlice,
      DoubleTextSliceDefaultPrimary,
      DoubleTextSliceVariation,
      DoubleTextSliceDefault,
      ImageOpenerSlice,
      ImageOpenerSliceDefaultPrimary,
      ImageOpenerSliceVariation,
      ImageOpenerSliceDefault,
      MountingSlice,
      MountingSliceDefaultPrimary,
      MountingSliceVariation,
      MountingSliceDefault,
      OpenerSlice,
      OpenerSliceDefaultPrimary,
      OpenerSliceVariation,
      OpenerSliceDefault,
      PowerSlice,
      PowerSliceDefaultPrimary,
      PowerSliceVariation,
      PowerSliceDefault,
      SpaceSlice,
      SpaceSliceDefaultPrimary,
      SpaceSliceVariation,
      SpaceSliceDefault,
      SpecsSlice,
      SpecsSliceDefaultPrimaryTableItem,
      SpecsSliceDefaultPrimary,
      SpecsSliceVariation,
      SpecsSliceDefault,
      ThicknessSlice,
      ThicknessSliceDefaultPrimary,
      ThicknessSliceVariation,
      ThicknessSliceDefault,
      WelcomeSlice,
      WelcomeSliceDefaultPrimary,
      WelcomeSliceVariation,
      WelcomeSliceDefault,
    };
  }
}
