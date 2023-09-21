import styled from '@emotion/styled';

export const Section = styled.section({
  height: '100vh',
});

export const Container = styled.div({
  height: '100%',
  display: 'grid',
  gridTemplateAreas: "'Sidebar Header' 'Sidebar Screens'",
  gridTemplateColumns: '260px 1fr',
  gridTemplateRows: '68px 1fr',
});

export const SidebarCell = styled.div({
  gridArea: 'Sidebar',
});

export const HeaderCell = styled.div({
  gridArea: 'Header',
});

export const ScreensPageCell = styled.div({
  gridArea: 'Screens',
});
