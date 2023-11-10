import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  background: gray;

  > header {
    width: 100%;
    height: 50px;
    background: lime;
    font-size: 2rem;

    box-shadow: 1px 1px 5px black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > section {
    background: #e0e0e0;
    display: flex;
    height: 600px;

    aside {
      background: #67afeb;
      color: #fff;
      border-radius: 12px;
      margin: 12px;
      padding: 12px;
    }

    aside:first-child {
      width: 10%;
    }

    aside:last-child {
      width: 20%;
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const TicketList = styled.div`
  width: 100%;
  margin-bottom: 12px;
  border-radius: 12px;
  max-height: 400px;
  overflow-y: auto;
  background: #bfbfbf;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 1px 1px 15px black;

  li {
    list-style: none;
    background: #e4e4e4;
    padding: 24px;
    border-radius: 12px;
    font-size: 1.5rem;
  }
`;
