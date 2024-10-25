import { Children, cloneElement, FC, HTMLAttributes, useEffect, useState } from 'react';
import { useOutsideClick } from '../../hooks/dom.hooks';

export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  onChoose?: (value: SelectOptionProps['value']) => any;
  label?: string;
  value?: string | number;
}

export interface SelectOptionProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  onChoose?: (value: SelectOptionProps['value']) => any;
}

export interface SelectState {
  optionsListVisible: boolean;
  selectedValue?: SelectOptionProps['value'];
  selectedChildren?: any;
}

const initialState: SelectState = {
  optionsListVisible: false,
};

const Select: FC<SelectProps> = ({ label, id, defaultValue, onChoose, children }) => {
  const [state, setState] = useState(initialState);
  const ref = useOutsideClick(() => setState({ ...state, optionsListVisible: false }));

  const handleSelect = (value: string | number) => {
    onChoose?.(value);

    const selectedChild: any = Children.toArray(children).find(
      (child: any) => child.props.value === value,
    );

    setState({
      ...state,
      selectedValue: value,
      selectedChildren: selectedChild?.props?.children || '-',
      optionsListVisible: false,
    });
  };

  useEffect(() => {
    if (defaultValue && children) {
      const selectedChild: any = Children.toArray(children).find(
        (child: any) => child.props.value === defaultValue,
      );

      setState({
        ...state,
        selectedValue: defaultValue as any,
        selectedChildren: selectedChild?.props?.children || '-',
        optionsListVisible: false,
      });
    }
  }, [defaultValue, children]);

  return (
    <div
      ref={ref}
      className='flex flex-col gap-2 relative'
      onClick={() => setState({ ...state, optionsListVisible: !state.optionsListVisible })}
    >
      {label && (
        <label htmlFor={id} className='font-noto text-xs text-gray-primary font-bold'>
          {label}
        </label>
      )}
      <div
        id={id}
        className={`border-2 min-h-11 p-3 rounded-lg cursor-pointer ${
          state.optionsListVisible ? 'border-green-primary' : ''
        } select-body`}
      >
        {state.selectedChildren || '-'}
      </div>
      {state.optionsListVisible && (
        <div className='select-none rounded-b-xl flex flex-col absolute top-[calc(100%_-_6px)] left-0 right-0 bg-light-primary divide-y border z-40'>
          {Children.map(children, (child: any, index: number) =>
            cloneElement(child, {
              onChoose: handleSelect,
              className:
                child.props.value === state.selectedValue
                  ? `p-3 bg-green-primary text-light-primary transition-all duration-300 cursor-pointer ${
                      Children.count(children) - 1 === index ? 'rounded-b-xl' : ''
                    }`
                  : `p-3 text-dark-primary bg-light-primary hover:bg-green-primary hover:text-light-primary transition-all duration-300 cursor-pointer ${
                      Children.count(children) - 1 === index ? 'rounded-b-xl' : ''
                    }`,
            }),
          )}
        </div>
      )}
    </div>
  );
};

export const Option: FC<SelectOptionProps> = ({ value, children, onChoose, ...props }) => {
  return (
    <div
      onClick={event => {
        event.stopPropagation();
        onChoose?.(value);
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Select;
