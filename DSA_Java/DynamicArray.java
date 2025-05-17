@SuppressWarnings("unchecked");
public class DynamicArray<T> implements Iterable <T>{
    private T[] arr;
    private int size;
    private int capacity;

    public DynamicArray(){ this(16);}
    public DynamicArray(int capacity){
        if (capacity < 0) throw new IllegalArgumentException("Illegal Capacity: " + capacity);
        this.capacity = capacity;
        arr = (T[]) new Object[capacity];        
    }

    public int size (){ return size;} 
    public boolean isEmpty(){ return size == 0;}

    public void add(T elem){
        if (size +1 >= capacity){
            if(capacity == 0 ) capacity = 1;
            else capacity *= 2;
        }
        T[] new_arr = (T[]) new Object[capacity];
        for (int i = 0; i < size; i++){
            new_arr[i] = arr[i];
        }
        arr = new_arr;
}
    }