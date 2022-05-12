import React, { useRef } from 'react';
import { useLocation } from 'umi';
import { render as renderAmis } from 'amis';

import './index.less';

export default () => {
  const { pathname } = useLocation();
  const amisRef = useRef(null);

  return (
    <div>
      <h1 className="title">Page index</h1>
      <div>pathname: {pathname}</div>
      <div>
        {renderAmis(
          {
            type: 'page',
            name: 'amis-page',
            data: {
              test: '1',
            },
            body: {
              type: 'form',
              wrapWithPanel: false,
              name: 'form-page',
              body: [
                {
                  type: 'button',
                  name: 'amis-c2eb818a-d394-4a48-93c8-1318f232eb9a',
                  label: '按钮',
                  identityName: '按钮',
                  fieldId: 'amis-c2eb818a-d394-4a48-93c8-1318f232eb9a',
                  onClick:
                    "props.onAction(event, {\n      actionType: 'toast',\n      toast: {\n        items: [\n          {\n            body: '轻提示内容'\n          }\n        ]\n      }\n});",
                },
                {
                  type: 'button',
                  name: 'amis-c2eb818a-d394-4a48-93c8-1318f232eb9a',
                  label: '按钮',
                  identityName: '按钮',
                  fieldId: 'amis-c2eb818a-d394-4a48-93c8-1318f232eb9a',
                  onClick:
                    'props.onAction(event, {\n  "actionType": "dialog",\n  "dialog": {\n    "title": "弹框",\n    "body": "这是个简单的弹框。"\n  }\n});',
                },
              ],
            },
          },
          {
            scopeRef: (ref: any) => {
              amisRef.current = ref;
            },
          },
        )}
      </div>
    </div>
  );
};
