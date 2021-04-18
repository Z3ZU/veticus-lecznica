// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6FdjgAyps8XDCSRfwRbJca
// Component: Re6zUsQooKFE
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: DuU_UFDf12SY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_veticus_lecznica.module.css"; // plasmic-import: 6FdjgAyps8XDCSRfwRbJca/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: Re6zUsQooKFE/css

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  main?: p.Flex<"div">;
  info?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
      </Head>

      <div className={defaultcss.plasmic_page_wrapper}>
        (true) ? (
        <div
          data-plasmic-name={"main"}
          data-plasmic-override={overrides.main}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.main
          )}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__nf4NP
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? '\nNowy gabinet "Veticus" został założony przez lekarza weterynarii Wojciecha Kubasa. Pan Wojciech ma ponad 20 lat doświadczenia w leczeniu zwierząt domowych i posiada specjalizacje \nw dziedzinie radiologii.\n\nSerdecznie zapraszamy pacjętów \nz Sędziszowa Małopolskiego i okolic.'
              : '\nNowy gabinet "Veticus" został założony przez lekarza weterynarii Wojciecha Kubasa. Pan Wojciech ma ponad 20 lat doświadczenia w leczeniu zwierząt domowych i posiada specjalizacje w dziedzinie radiologii.\n\nSerdecznie zapraszamy pacjętów z Sędziszowa Małopolskiego i okolic.'}
          </div>

          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__t6I05)}
            role={"img"}
            src={"/plasmic/veticus_lecznica/images/photo1.jpeg"}
          />

          <div className={classNames(defaultcss.all, sty.box__sr3Wi)}>
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__aWgnM)}
              role={"img"}
              src={"/plasmic/veticus_lecznica/images/logo.png"}
            />

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? false : false
            ) ? (
              <div className={classNames(defaultcss.all, sty.box__gIrmH)} />
            ) : null}
          </div>

          <div className={classNames(defaultcss.all, sty.box__c0Ze)} />

          <div
            data-plasmic-name={"info"}
            data-plasmic-override={overrides.info}
            className={classNames(defaultcss.all, sty.info)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__sFLyi
              )}
            >
              {
                "Sędziszów Małopolski\nul. Tarnowskich 1\nkontakt@veticus-lecznica.pl\ntel. 510380864\n"
              }
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__cNzV8
              )}
            >
              {"Godziny otwarcia:\nponiedziałek - piątek \n12:00 - 18:00"}
            </div>
          </div>
        </div>
        ) : null
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  main: ["main", "info"],
  info: ["info"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  main: "div";
  info: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHomepage__VariantsArgs;
  args?: PlasmicHomepage__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "main") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("main"),
  {
    // Helper components rendering sub-elements
    info: makeNodeComponent("info"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
