const SampleNmpStr = `
@gui:registry=https://proget.avepoint.net/npm/avepoint-npm/
registry=https://proget.avepoint.net/npm/npm.org/
  `

const SampleReactStr = `
import { ThemeProvider, getAllureTheme, Themes, Language } from '@gui/fluent-ui-allure';
import * as React from 'react';

const Content = () => {
    return (
        <ThemeProvider theme={getAllureTheme(Themes.Cabolt, Language.EN)}>
            <div />
        </ThemeProvider>
    );
};
  `
const SampleBasicStr = `
  import * as React from "react";
  import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure";

  export const SampleBasic = () => {
    const [isDialogClosed, setDialogClosed] = React.useState(true);
    return (
      <div>
        <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
        <Dialog hidden={isDialogClosed} title="Email Confirm" maxWidth="480px" minWidth="480px">
          <div style={{ maxHeight: 100 }}>
            <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
            <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
            <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
            <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
          </div>
          <DialogFooter>
            <DefaultButton onClick={() => setDialogClosed(true)}>Cancel</DefaultButton>
            <PrimaryButton onClick={() => setDialogClosed(true)}>Submit</PrimaryButton>
          </DialogFooter>
        </Dialog>
      </div>
    );
  };
  `

const SampleNoDismissStr = `
  import * as React from "react";
  import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure";

  export const SampleNoDismiss = () => {
    const [isDialogClosed, setDialogClosed] = React.useState(true);
    return (
      <div>
        <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
        <Dialog hidden={isDialogClosed} title="Confirm" maxWidth="480px">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque, excepturi, veniam, odit quos eveniet laudantium ea aut amet in est possimus minima rerum explicabo ducimus
            quisquam optio! Alias, totam?
          </div>
          <DialogFooter>
            <PrimaryButton onClick={() => setDialogClosed(true)} text="OK" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  };
  `

const SampleBtnBasicStr = `
import { Stack, DefaultButton, PrimaryButton, Link, TextButton, DashedButton } from "@gui/fluent-ui-allure";

export const SampleBasic = () => {

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <TextButton title="Normal Button">Normal button</TextButton>

      <DefaultButton>Outline</DefaultButton>

      <PrimaryButton>Filled Button</PrimaryButton>

      <DashedButton>Dashed button</DashedButton>

      <Link underline>Link button</Link>
    </Stack>
  );
};

  `

const SampleContextMenuStr = `
import { Stack, DefaultButton, PrimaryButton, IconButton, IContextualMenuProps } from "@gui/fluent-ui-allure";

export const SampleContextMenu = () => {
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: "k1",
        text: "Email message",
        iconProps: { iconName: "fas-envelope" },
      },
      {
        key: "k2",
        text: "Calendar event",
        iconProps: { iconName: "fas-calendar-days" },
        subMenuProps: {
          calloutProps: {
            gapSpace: 5
          },
          gapSpace: 5,
          items: [
            {
              key: "k2-1",
              text: "Meeting",
              iconProps: { iconName: "fas-envelope" },
            },
            {
              key: "k2-2",
              text: "Startup",
              iconProps: { iconName: "fas-envelope" },
            },
          ]
        }
      },
    ],
    directionalHintFixed: true,
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <DefaultButton menuProps={menuProps}>Outline</DefaultButton>

      <DefaultButton iconProps={{ iconName: "fas-rotate-right" }} menuProps={menuProps}>Outline</DefaultButton>


      <PrimaryButton menuProps={menuProps}>Button Group</PrimaryButton>

      <IconButton bordered iconProps={{ iconName: "fas-ellipsis" }} menuProps={menuProps} styles={{ menuIcon: { display: "none" } }}></IconButton>
    </Stack>
  );
};

  `

export {
  SampleNmpStr,
  SampleReactStr,
  SampleBasicStr,
  SampleNoDismissStr,
  SampleBtnBasicStr,
  SampleContextMenuStr
}
