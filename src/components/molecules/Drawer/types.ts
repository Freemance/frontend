export default interface IDrawer {
  variant: 'persistent' | 'permanent' | 'temporary';
  open: boolean;
  handleDrawerClose: () => void;
}
