import React from 'react';
import {Card, CardHeader, CardTitle, CardBody} from '@patternfly/react-core';
export const CardClickable = () => {
  const id1 = 'clickable-card-input-1';
  const id2 = 'clickable-card-input-2';
  const id3 = 'clickable-card-input-3';
  return <React.Fragment>
      <Card id="clickable-card-example-1" >
        <CardHeader selectableActions={{
    
    selectableActionId: id1,
    selectableActionAriaLabelledby: 'clickable-card-example-1',
    name: 'clickable-card-example'
  }}>
          <CardTitle>First card</CardTitle>
        </CardHeader>
        <CardBody>This card performs an action on click.</CardBody>
      </Card>
      
      
    </React.Fragment>;
};