"use client" 

import React, { forwardRef } from "react";
import clsx from "clsx";

// ------------------------------
//  ContainerOuter
// ------------------------------

export type ContainerOuterProps = React.HTMLAttributes<HTMLDivElement>;

export const ContainerOuter = forwardRef<HTMLDivElement, ContainerOuterProps>(
  function ContainerOuter({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
        <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

ContainerOuter.displayName = "ContainerOuter";

// ------------------------------
//  ContainerInner
// ------------------------------

export type ContainerInnerProps = React.HTMLAttributes<HTMLDivElement>;

export const ContainerInner = forwardRef<HTMLDivElement, ContainerInnerProps>(
  function ContainerInner({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

ContainerInner.displayName = "ContainerInner";

// ------------------------------
//  Container (Wrapper)
// ------------------------------

export type ContainerProps = React.ComponentPropsWithoutRef<typeof ContainerOuter>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ children, ...props }, ref) {
    return (
      <ContainerOuter ref={ref} {...props}>
        <ContainerInner>{children}</ContainerInner>
      </ContainerOuter>
    );
  }
);

Container.displayName = "Container";
