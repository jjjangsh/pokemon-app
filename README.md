## 프로젝트명

Pokemon Dex ( 포켓몬 도감 )

## 소개 및 구현기능

- **링크**: https://pokemon-app-virid-psi.vercel.app/
- **메인 페이지**: "포켓몬 도감 시작하기" 버튼을 클릭하면 도감 페이지로 이동하는 랜딩 페이지 입니다.
- **도감 페이지**
  - 대시보드 : 선택한 6개의 포켓몬을 표시하고, 포켓몬을 선택 해제할 수 있습니다.
    - 선택되어 있는 포켓몬이 없으면 포켓볼 이미지를 보여주고 포켓몬을 선택했다면 해당 포켓몬의 이미지, 이름, 아이디를 보여주고 삭제 버튼을 제공합니다.
  - 포켓몬 리스트 : 포켓몬 리스트를 보여주고, 각 포켓몬 카드에 추가 버튼을 클릭하면 대시보드에 추가할 수 있습니다.
    - 추가 버튼을 제외한 나머지 카드 공간을 클릭하면 해당 포켓몬의 타입과 간단한 설명을 보여주는 디테일 페이지로 이동합니다.
    - 디테일 페이지에는 다시 도감 페이지로 이동할 수 있는 뒤로가기 버튼이 존재합니다.
  - 포켓몬 카드 컴포넌트 구현하기: 각 포켓몬의 이미지, 이름, 타입을 표시하고 '추가' 또는 '삭제' 버튼을 제공합니다.
    - 사용자 UX 측면에서 추가 버튼 주변을 클릭해도 디테일 페이지로 이동하지 않습니다.
- **포켓몬 디테일 페이지**: 개별 포켓몬 카드를 클릭하면 포켓몬의 상세 정보를 보여주는 페이지로 이동합니다. 이때, `queryString`으로 포켓몬 ID를 전달하고, 해당 ID로 `MOCK_DATA`에서 데이터를 찾아서 디테일을 표시합니다.

## 필수사항

- **Git 브랜치 전략 사용하기**:
  - **`props-drilling` 브랜치**를 생성하고, props drilling을 사용해 상태를 관리하며 작업하세요.
  - 모든 기능 구현 후, **`context` 브랜치**를 생성하여 Context API로 리팩터링하세요.
- **페이지 라우팅 구현하기**:
  - `react-router-dom`을 이용해 홈 페이지에서 도감 페이지로 이동할 수 있도록 구현하세요.
- **도감 페이지 요구사항**:
  - **반드시 `Dashboard`, `PokemonList`, `PokemonCard`로 컴포넌트를 구분**하여 페이지를 구성하세요.
  - 포켓몬 리스트가 표시되고, 각 포켓몬 카드는 '추가' 버튼을 가집니다.
  - 선택된 포켓몬이 대시보드에 표시되며, 이 포켓몬들은 '삭제' 버튼을 가집니다.
  - 최대 6개의 포켓몬만 선택할 수 있습니다.
  - 각 포켓몬 카드를 클릭하면 해당 포켓몬의 디테일 페이지로 이동합니다.
- **디테일 페이지**:
  - `queryString`으로 포켓몬 ID를 받아 해당 포켓몬의 상세 정보를 표시하세요.
  - "뒤로 가기" 버튼을 통해 이전 페이지로 돌아갈 수 있도록 구현하세요.
- **알림 기능 구현**:
  - 포켓몬을 선택할 때 이미 선택된 포켓몬이라면 `alert` 메시지를 띄우고, 선택된 포켓몬이 6개가 되면 더 이상 선택할 수 없도록 `alert` 메시지를 띄웁니다.
- **스타일링**:
  - `styled-components`를 사용하여 포켓몬 카드와 대시보드를 스타일링하세요.
